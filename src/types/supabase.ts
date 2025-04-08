
// Define database types for Supabase
export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          image_url: string;
          live_url: string | null;
          github_url: string | null;
          technologies: string[];
          featured: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          image_url: string;
          live_url?: string | null;
          github_url?: string | null;
          technologies?: string[];
          featured?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          image_url?: string;
          live_url?: string | null;
          github_url?: string | null;
          technologies?: string[];
          featured?: boolean;
          created_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
