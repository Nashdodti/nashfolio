
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface PasswordVerificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const PasswordVerificationDialog = ({
  open,
  onOpenChange,
  onSuccess,
}: PasswordVerificationDialogProps) => {
  const [password, setPassword] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const correctPassword = "9090";

  const handleVerify = () => {
    setIsVerifying(true);
    
    // Simulate a slight delay for verification
    setTimeout(() => {
      if (password === correctPassword) {
        toast({
          title: "Access granted",
          description: "You can now add or edit projects.",
        });
        onSuccess();
        onOpenChange(false);
      } else {
        toast({
          title: "Access denied",
          description: "Incorrect password. Please try again.",
          variant: "destructive",
        });
      }
      setIsVerifying(false);
      setPassword("");
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Admin Verification Required</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground mb-4">
            Please enter the admin password to continue.
          </p>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="bg-white"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleVerify();
              }
            }}
          />
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange(false);
              setPassword("");
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleVerify} 
            disabled={isVerifying}
            className="bg-portfolio-blue text-white hover:bg-portfolio-blue/90"
          >
            {isVerifying ? "Verifying..." : "Verify"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordVerificationDialog;
