// products-data.js
// แยกข้อมูลสินค้าและลิงก์ URL รูปภาพออกจาก index.html เพื่อลดขนาดไฟล์และแก้ไขง่าย

window.TATHIN_DATA = {
  shop: {
    name: "ทธิน",
    nameEn: "Tathin",
    slogan: "ทธิน พิมพ์คมชัด จัดจ้านทุกรายละเอียด",
    phone: "064-6428266",
    lineUrl: "https://lin.ee/2deyskIkX",
    mapUrl: "https://goo.gl/maps/UTUp8XueckQg2qAN6",
    // สามารถเปลี่ยนเป็น URL รูปโลโก้/QR ที่ฝากไฟล์ไว้ภายนอกได้ทันที
    logoUrl: "",
    qrLineUrl: ""
  },

  categories: [
    { id: "all", label: "ทั้งหมด" },
    { id: "sticker-custom", label: "1. สติกเกอร์ & ฉลากสินค้า" },
    { id: "sticker-ready", label: "2. สติกเกอร์ & ฉลากสินค้า (แบบสำเร็จรูป)" },
    { id: "business-card", label: "3. นามบัตร" },
    { id: "brochure-other", label: "4. โบชัวร์ การ์ด & สื่อสิ่งพิมพ์อื่นๆ" }
  ],

  products: [
    {
      id: "stk-waterproof-01",
      category: "sticker-custom",
      categoryLabel: "1. สติกเกอร์ & ฉลากสินค้า",
      title: "สติกเกอร์ไดคัทกันน้ำ (PP / PVC)",
      subtitle: "ทนน้ำ ทนชื้น แช่เย็นได้ สีสดคมชัด",
      priceText: "เริ่มต้น 150 บาท",
      // ใส่ลิงก์ URL รูปภาพภายนอก (เช่น https://.../waterproof-sticker.jpg)
      imageUrl: "https://placehold.co/800x600/14532d/facc15?text=Waterproof+Die-Cut+Sticker",
      alt: "ตัวอย่างสติกเกอร์ไดคัทกันน้ำ ร้านทธิน"
    },
    {
      id: "stk-paper-brand-01",
      category: "sticker-custom",
      categoryLabel: "1. สติกเกอร์ & ฉลากสินค้า",
      title: "สติกเกอร์กระดาษไดคัทติดแบรนด์สินค้า",
      subtitle: "กระดาษอาร์ตมัน / กระดาษคราฟต์ ไดคัทตามทรง",
      priceText: "เริ่มต้น 120 บาท",
      imageUrl: "https://placehold.co/800x600/166534/ffffff?text=Brand+Paper+Sticker",
      alt: "ตัวอย่างสติกเกอร์กระดาษไดคัทติดแบรนด์สินค้า"
    },
    {
      id: "stk-ready-waterproof-01",
      category: "sticker-ready",
      categoryLabel: "2. สติกเกอร์ & ฉลากสินค้า (แบบสำเร็จรูป)",
      title: "สติกเกอร์ไดคัทกันน้ำ สำเร็จรูปพร้อมใช้",
      subtitle: "ลายยอดนิยม พร้อมส่ง ไม่ต้องรอออกแบบนาน",
      priceText: "เริ่มต้น 59 บาท",
      imageUrl: "https://placehold.co/800x600/15803d/fef08a?text=Ready+Waterproof+Sticker",
      alt: "ตัวอย่างสติกเกอร์ไดคัทกันน้ำแบบสำเร็จรูป"
    },
    {
      id: "stk-ready-paper-01",
      category: "sticker-ready",
      categoryLabel: "2. สติกเกอร์ & ฉลากสินค้า (แบบสำเร็จรูป)",
      title: "สติกเกอร์กระดาษไดคัทติดแบรนด์ สำเร็จรูป",
      subtitle: "แพ็กคุ้มค่า สำหรับแม่ค้าออนไลน์และร้านค้าเริ่มต้น",
      priceText: "เริ่มต้น 49 บาท",
      imageUrl: "https://placehold.co/800x600/14532d/ffffff?text=Ready+Brand+Sticker",
      alt: "ตัวอย่างสติกเกอร์กระดาษไดคัทติดแบรนด์แบบสำเร็จรูป"
    },
    {
      id: "card-biz-01",
      category: "business-card",
      categoryLabel: "3. นามบัตร",
      title: "นามบัตรพรีเมียม เคลือบด้าน / เคลือบเงา",
      subtitle: "กระดาษหนาพิเศษ พิมพ์ 2 หน้า สีคมชัด",
      priceText: "เริ่มต้น 250 บาท / กล่อง",
      imageUrl: "https://placehold.co/800x600/166534/facc15?text=Premium+Business+Card",
      alt: "ตัวอย่างนามบัตรพรีเมียม"
    },
    {
      id: "print-trifold-01",
      category: "brochure-other",
      categoryLabel: "4. โบชัวร์ การ์ด & สื่อสิ่งพิมพ์อื่นๆ",
      title: "แผ่นพับ 3 ตอน ประชาสัมพันธ์ธุรกิจ",
      subtitle: "พับเรียบคม พื้นที่ครบถ้วนสำหรับข้อมูลสินค้าและบริการ",
      priceText: "เริ่มต้น 450 บาท",
      imageUrl: "https://placehold.co/800x600/15803d/ffffff?text=Tri-Fold+Brochure",
      alt: "ตัวอย่างแผ่นพับ 3 ตอน"
    },
    {
      id: "print-flyer-greeting-01",
      category: "brochure-other",
      categoryLabel: "4. โบชัวร์ การ์ด & สื่อสิ่งพิมพ์อื่นๆ",
      title: "โบชัวร์สินค้าสีสันสดใส & การ์ดอวยพร",
      subtitle: "สีสดจัดจ้าน ดึงดูดสายตา พิมพ์ได้ทั้งจำนวนน้อยและมาก",
      priceText: "สอบถามราคาตามขนาด",
      imageUrl: "https://placehold.co/800x600/14532d/fef08a?text=Colorful+Flyer+%26+Greeting+Card",
      alt: "ตัวอย่างโบชัวร์สินค้าสีสันสดใสและการ์ดอวยพร"
    }
  ]
};