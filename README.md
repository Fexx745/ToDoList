# To-Do List Application (React + TypeScript)

แอปพลิเคชัน To-Do List ที่สร้างด้วย React และ TypeScript ซึ่งรองรับฟังก์ชันพื้นฐานดังนี้:

- เพิ่ม, แก้ไข, และลบ Task
- ติ๊กเครื่องหมายว่าเสร็จแล้ว
- บันทึกรายการลง `localStorage` เพื่อให้ข้อมูลคงอยู่แม้รีเฟรชหน้าเว็บ

## ฟีเจอร์:
- **เพิ่ม Task**: เพิ่มงานใหม่ลงในรายการ
- **แก้ไข Task**: คลิกที่ข้อความของงานเพื่อแก้ไข
- **ลบ Task**: ลบงานออกจากรายการ
- **ติ๊กเครื่องหมายว่าเสร็จแล้ว**: คลิกที่เครื่องหมายถูกเพื่อระบุว่างานนั้นเสร็จแล้ว
- **การเก็บข้อมูลถาวร**: ข้อมูลจะถูกเก็บใน `localStorage` เพื่อให้ข้อมูลคงอยู่แม้หลังจากรีเฟรชหน้าเว็บ

## ตัวอย่าง:
คุณสามารถลองใช้งานแอปได้ที่:  
[https://todolist-examination.netlify.app/] 

## การติดตั้ง

ทำตามขั้นตอนเหล่านี้เพื่อรันโปรเจกต์ในเครื่องของคุณ:

1. ติดตั้ง dependencies:
   ```bash
   npm install

2. รันโปรเจกต์:
   npm run dev