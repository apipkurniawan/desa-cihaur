import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";
import { FormInput } from "@/components/shared/FormInput";
import { FileUpload } from "@/components/shared/FileUpload";
import { pengaturanDesa } from "@/lib/data/dummy";

export default function DashboardPengaturanPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pengaturan Desa" description="Kelola profil desa, logo, kepala desa, dan kontak resmi." />
      <Card>
        <CardContent className="grid gap-4 p-5 md:grid-cols-2">
          <FormInput label="Nama Desa" name="namaDesa" defaultValue={pengaturanDesa.namaDesa} />
          <FormInput label="Kecamatan" name="kecamatan" defaultValue={pengaturanDesa.kecamatan} />
          <FormInput label="Kabupaten" name="kabupaten" defaultValue={pengaturanDesa.kabupaten} />
          <FormInput label="Provinsi" name="provinsi" defaultValue={pengaturanDesa.provinsi} />
          <FormInput label="Nama Kepala Desa" name="kepalaDesa" defaultValue={pengaturanDesa.namaKepalaDesa} />
          <FormInput label="Nomor Kontak" name="nomorKontak" defaultValue={pengaturanDesa.nomorKontak} />
          <div className="md:col-span-2">
            <FormInput label="Alamat Kantor" name="alamatKantor" defaultValue={pengaturanDesa.alamatKantor} />
          </div>
          <div className="md:col-span-2">
            <FileUpload label="Logo Desa" name="logoDesa" />
          </div>
          <div className="md:col-span-2">
            <Button>
              <Save className="h-4 w-4" />
              Simpan Pengaturan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
