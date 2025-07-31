import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Logo } from "../icons/logo";

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-4">اتصل بنا</h3>
          <form className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" placeholder="الاسم" className="bg-input"/>
              <Input type="email" placeholder="البريد الإلكتروني" className="bg-input"/>
            </div>
            <Textarea placeholder="رسالتك" rows={4} className="bg-input"/>
            <Button type="submit" className="w-full sm:w-auto">إرسال الرسالة</Button>
          </form>
        </div>
        <div className="space-y-4 text-right">
          <Link href="#" className="flex items-center space-x-2 justify-end" prefetch={false}>
            <span className="text-xl font-bold">ملاح رؤى جغرافية</span>
            <Logo className="h-8 w-8 text-primary" />
          </Link>
          <p className="text-muted-foreground">
            حلول جغرافية مكانية دقيقة لعالم معقد.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>123 شارع الجغرافيا المكانية، جناح 100</p>
            <p>مدينة المسح، الرمز البريدي 12345</p>
            <p>الهاتف: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              وظائف
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              سياسة الخصوصية
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
              شروط الخدمة
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2024 ملاح رؤى جغرافية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
