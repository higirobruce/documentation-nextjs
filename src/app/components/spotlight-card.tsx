import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SpotlightCard({ title }: { title: string }) {
  return (
    <Card className="h-32 border-[#054D6F] border-2">
      <CardHeader>
        <CardTitle className="text-[#054D6F]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Coming soon...
      </CardContent>
    </Card>
  );
}
