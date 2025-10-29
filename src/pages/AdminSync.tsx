import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function AdminSync() {
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSync = async () => {
    setSyncing(true);
    setSyncResult(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/sync-waste-carriers`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setSyncResult({ success: true, message: data.message });
        toast({
          title: "Success!",
          description: data.message,
        });
      } else {
        throw new Error(data.error || 'Sync failed');
      }
    } catch (error) {
      console.error('Sync error:', error);
      setSyncResult({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Unknown error' 
      });
      toast({
        title: "Error",
        description: "Failed to sync carriers",
        variant: "destructive",
      });
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Sync Waste Carriers</CardTitle>
          <CardDescription>
            Import all Upper Tier waste carriers from the UK Government API into the database.
            This may take several minutes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleSync}
            disabled={syncing}
            className="w-full"
            size="lg"
          >
            {syncing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-5 w-5" />
                Start Sync
              </>
            )}
          </Button>

          {syncResult && (
            <div
              className={`p-4 rounded-lg flex items-start gap-3 ${
                syncResult.success
                  ? "bg-green-50 text-green-900 border border-green-200"
                  : "bg-red-50 text-red-900 border border-red-200"
              }`}
            >
              {syncResult.success ? (
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-medium">
                  {syncResult.success ? "Sync Completed" : "Sync Failed"}
                </p>
                <p className="text-sm mt-1">{syncResult.message}</p>
              </div>
            </div>
          )}

          <div className="text-sm text-muted-foreground space-y-2">
            <p><strong>Note:</strong> This process will:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Fetch all Upper Tier carriers from the UK API</li>
              <li>Store them in the database with proper indexing</li>
              <li>Enable fast location-based searching</li>
              <li>Take approximately 5-10 minutes to complete</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
