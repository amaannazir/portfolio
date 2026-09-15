import { ArrowLeft, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  return (
    <main className="feature-surface flex min-h-screen items-center">
      <div className="section-shell grid gap-10 py-16 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
        <p className="font-display text-[clamp(7rem,24vw,18rem)] font-medium leading-none text-secondary">404</p>
        <div className="max-w-xl border-t border-feature-foreground/20 pt-7">
          <p className="mb-3 text-xs font-semibold uppercase text-secondary" style={{ letterSpacing: ".14em" }}>Route not found</p>
          <h1 className="font-display text-4xl font-medium sm:text-6xl">This page isn’t part of the system.</h1>
          <p className="mt-5 leading-relaxed text-feature-foreground/70">The address <span className="break-all text-feature-foreground">{location.pathname}</span> doesn’t exist or has moved.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => window.history.back()} className="bg-secondary text-secondary-foreground hover:bg-secondary/90"><ArrowLeft /> Go back</Button>
            <Button variant="outline" asChild className="border-feature-foreground/30 text-feature-foreground hover:bg-feature-foreground/10 hover:text-feature-foreground"><Link to="/"><Home /> Home</Link></Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;