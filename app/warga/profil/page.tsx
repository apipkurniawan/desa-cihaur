import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { warga } from "@/lib/data/dummy";

export default function ProfilWargaPage() {
  const profile = warga[0];
  return (
    <div className="space-y-6">
      <PageHeader title="Profil Warga" description="Data profil sesuai administrasi desa." />
      <Card>
        <CardHeader>
          <CardTitle>{profile.namaLengkap}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {[
            ["NIK", profile.nik],
            ["Nomor KK", profile.nomorKk],
            ["Tempat/Tanggal Lahir", `${profile.tempatLahir}, ${profile.tanggalLahir}`],
            ["Jenis Kelamin", profile.jenisKelamin],
            ["Agama", profile.agama],
            ["Pekerjaan", profile.pekerjaan],
            ["Pendidikan", profile.pendidikan],
            ["Alamat", `${profile.alamat}, RT ${profile.rt}/RW ${profile.rw}, ${profile.dusun}`],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-app-background p-4">
              <p className="text-xs font-medium uppercase text-app-muted">{label}</p>
              <p className="mt-1 text-sm font-medium text-app-text">{value}</p>
            </div>
          ))}
          <div className="rounded-lg bg-app-background p-4">
            <p className="mb-2 text-xs font-medium uppercase text-app-muted">Status</p>
            <StatusBadge status={profile.status} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
