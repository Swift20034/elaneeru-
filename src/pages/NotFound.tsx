import { useEffect } from "react";
import { DEFAULT_DOCUMENT_TITLE } from "@/config/site";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found | Elaneeru Homestay";
    return () => {
      document.title = DEFAULT_DOCUMENT_TITLE;
    };
  }, []);

  return (
    <div className="flex min-h-dvh items-center justify-center px-6">
      <div className="text-center glass-panel rounded-2xl px-10 py-12 max-w-md">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
