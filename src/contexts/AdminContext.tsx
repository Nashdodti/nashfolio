
import { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from '@/components/ui/use-toast';

type AdminContextType = {
  isAdmin: boolean;
  toggleAdmin: (password?: string) => void;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  
  const toggleAdmin = (password?: string) => {
    // If already in admin mode, we're just toggling off
    if (isAdmin) {
      setIsAdmin(false);
      toast({
        title: "Admin Mode Disabled",
        description: "You have exited admin mode."
      });
      return;
    }
    
    // If not admin, require password to enable
    if (password === '9090') {
      setIsAdmin(true);
      toast({
        title: "Admin Mode Enabled",
        description: "You can now add and edit projects."
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Admin mode not enabled.",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
