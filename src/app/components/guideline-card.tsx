import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface GuidelineProps {
  title: string;
  description: string;
  image: string;
}

export function GuidelineCard({ title, description, image }: GuidelineProps) {
  return (
    <Card className="overflow-hidden bg-[#F8FAFD]">
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
