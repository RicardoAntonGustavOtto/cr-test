import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const emailSchema = z.string().email('Please enter a valid email address');
const passwordSchema = z.string().min(8, 'Password must be at least 8 characters');

const Auth = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  
  // Login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Signup form
  const [signupFullName, setSignupFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    if (user && !authLoading) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(loginEmail);
      passwordSchema.parse(loginPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Validation Error',
          description: error.errors[0].message,
          variant: 'destructive',
        });
        return;
      }
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    setLoading(false);

    if (error) {
      toast({
        title: 'Login Failed',
        description: error.message,
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Login Successful',
      description: 'Welcome back!',
    });
    
    navigate('/');
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      emailSchema.parse(signupEmail);
      passwordSchema.parse(signupPassword);
      
      if (!signupFullName.trim()) {
        throw new Error('Full name is required');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Validation Error',
          description: error.errors[0].message,
          variant: 'destructive',
        });
        return;
      }
      if (error instanceof Error) {
        toast({
          title: 'Validation Error',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }
    }

    setLoading(true);

    const redirectUrl = `${window.location.origin}/`;

    const { error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: signupFullName,
          phone: signupPhone,
        },
      },
    });

    setLoading(false);

    if (error) {
      if (error.message.includes('already registered')) {
        toast({
          title: 'Account Exists',
          description: 'This email is already registered. Please login instead.',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Signup Failed',
          description: error.message,
          variant: 'destructive',
        });
      }
      return;
    }

    toast({
      title: 'Account Created',
      description: 'Your account has been created successfully. You can now login.',
    });
    
    // Clear signup form
    setSignupFullName('');
    setSignupEmail('');
    setSignupPhone('');
    setSignupPassword('');
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome</CardTitle>
              <CardDescription>
                Login or create an account to claim your business listing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Logging in...
                        </>
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name *</Label>
                      <Input
                        id="signup-name"
                        placeholder="John Doe"
                        value={signupFullName}
                        onChange={(e) => setSignupFullName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email *</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-phone">Phone</Label>
                      <Input
                        id="signup-phone"
                        type="tel"
                        placeholder="Phone number"
                        value={signupPhone}
                        onChange={(e) => setSignupPhone(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password *</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Minimum 8 characters"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Auth;
