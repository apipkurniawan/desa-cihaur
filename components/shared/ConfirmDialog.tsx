"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ConfirmDialog({
  trigger,
  title = "Hapus data?",
  description = "Tindakan ini tidak dapat dibatalkan.",
  onConfirm,
}: {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  onConfirm?: () => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={onConfirm}>
              Hapus
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
