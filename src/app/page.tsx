import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Map, Cog, HardHat, Scale, Layers3, ScanEye, Network, DatabaseZap, Mountain, ShipWheel, Waypoints, Landmark } from "lucide-react";
import { TEAM_MEMBERS, BLOG_POSTS, SERVICES } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const iconMap: { [key: string]: React.ElementType } = {
  "مسح العقارات": Map,
  "المسح الهندسي": Cog,
  "مسح الإنشاءات": HardHat,
  "مسح الحدود": Scale,
  "المسح الطبوغرافي": Layers3,
  "مسوحات ALTA/NSPS لسندات الملكية": Landmark,
  "المسح الجوي ورسم الخرائط": Waypoints,
  "المسح بالليزر ثلاثي الأبعاد": ScanEye,
  "نظم المعلومات الجغرافية (GIS)": Network,
  "ليدار": DatabaseZap,
  "نمذجة التضاريس الرقمية (DTM)": Mountain,
  "المسح الحجمي": ShipWheel,
  "رسم خرائط المرافق": Waypoints,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          className="w-full pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(26, 22, 44, 0.8), rgba(26, 22, 44, 1)), url('https://placehold.co/1920x1080.png')", backgroundBlendMode: 'multiply' }}
          data-ai-hint="خلفية هندسية مجردة"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    تنقل في عالمك مع رؤى جغرافية
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    حلول جغرافية مكانية دقيقة مصممة خصيصًا لمشاريعك. من مسح الأراضي إلى رسم الخرائط ثلاثية الأبعاد المتقدمة، نحن نقدم البيانات التي تحتاجها للبناء بثقة.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="#services">
                    <Button size="lg">استكشف الخدمات</Button>
                  </a>
                  <a href="#contact">
                    <Button size="lg" variant="secondary">
                      اتصل بنا
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>حلولنا</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">خدمات جغرافية مكانية شاملة</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  نحن نقدم مجموعة كاملة من الخدمات لتلبية متطلبات أي مشروع، مما يضمن الدقة والموثوقية من البداية إلى النهاية.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
              {SERVICES.map((service) => {
                const Icon = iconMap[service.title] || Map;
                return (
                  <Card key={service.title} className="bg-card/50 backdrop-blur-lg border border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>خبراؤنا</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">تعرف على فريق المحترفين لدينا</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  نجاحنا مدفوع بفريق من الخبراء المتفانين وذوي الخبرة في المجال الجغرافي المكاني.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="flex flex-col items-center space-y-2">
                  <Avatar className="w-24 h-24 border-4 border-primary">
                    <AvatarImage src={member.avatar} data-ai-hint="professional headshot"/>
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>رؤى</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">من مدونتنا</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ابق على اطلاع بآخر الأخبار والاتجاهات ودراسات الحالة في عالم التكنولوجيا الجغرافية المكانية.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {BLOG_POSTS.map((post) => (
                <Card key={post.title} className="overflow-hidden bg-card/50 backdrop-blur-lg border border-secondary hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                  <Image
                    alt="Blog post image"
                    className="aspect-video w-full object-cover"
                    height="310"
                    src={post.image}
                    width="550"
                    data-ai-hint={post.imageHint}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                    <Button variant="link" className="px-0 mt-4 text-accent">
                      اقرأ المزيد <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
