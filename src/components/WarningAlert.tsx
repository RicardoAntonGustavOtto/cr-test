import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const WarningAlert = () => {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[hsl(var(--warning))] border-l-4 border-destructive rounded-lg p-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[hsl(var(--warning-foreground))] mb-2">
                  Warning: Risk of Unlimited Fines and up to 5 years in prison!
                </h3>
                <p className="text-[hsl(var(--warning-foreground))] mb-3">
                  Hiring an unlicensed waste carrier puts you at serious risk.
                </p>
                <p className="text-[hsl(var(--warning-foreground))] mb-3">
                  If your waste is fly-tipped,{" "}
                  <strong>you can be fined an unlimited amount, or even recieve a 5 year prison sentence</strong>,
                  even if you didn't dump it.
                </p>
                <p className="text-[hsl(var(--warning-foreground))] mb-3">
                  <strong>Protect yourself:</strong> Always use a verified, licensed carrier. All providers
                  listed in our directory are checked against the official Environment Agency register.
                </p>
                <Link
                  to="/resources/fly-tipping-risks"
                  className="text-destructive hover:text-destructive/80 font-medium underline"
                >
                  Learn more about the risks & your responsibilities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningAlert;
