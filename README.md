# ReactApp24Hrs
ITCSsDeveloper/ReactApp24Hrs

เรามาลองดูกัน ใน 1 วัน เราจะทำอะไรได้บ้างเกี่ยวกับ ReactJs 

ผมจะเขียนเรื่องราว หรือ ขั้นตอนที่ผมอยากจะเขียนเป็นข้อๆ เป็นลำดับ (ไม่สำคัญว่าเพื่ออะไร เขียนไว้ให้ตัวเองครับ :D )

# Start At 20.00 17/3/2021


1.  install node js

2.  Create React App
    npx create-react-app my-app
    cd my-app
    npm start

3.  ตัวไฟล์ index.js เป็นตัว เรียก Dom Element Root ที่อยู่ใน public/index.html

4.  ภาษาที่ตัว React ใช้คือ JSX ( ความสามารถของมันคือ เขียน html + js เข้าไปด้วยกันได้ )

5.  เราต้องมองทุกส่วนของเว็บเราให้เป็น Component Concept  ( แม้กระทั้งปุ่ม 1 ปุ่ม label 1 label ) 

6. ใน Render() Return() ตัว React อนุณาติให้ Return ได้แค่ 1 Html Root Element เท่านั้น

7. การ export default App ใน 1 ไฟล์ js React อนุญาตให้ตั้ง default ได้แค่ 1 ตัวเท่านั้น

8. npx มีมาให้ตั้งแต่ npm 5.2+
    อยากรู้ไปอ่านเพิ่มเอาเอง 
    https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
    https://medium.com/i-gear-geek/มาทำความรู้จักกับเจ้า-npx-กันดีกว่า-d7628cd309e5

9. เวลาจะเรียกใช้ CSS ใน jsx ให้ใช้ชื่อว่า className ( เพราะตัว js ไม่ยอมให้ใช้คำสั่ง class มันจะไปซ้ำกับ syntax ของ js ในการสร้าง class)

10. style จะเก็บไว้ใน .css เวลาทำงาน ก็จะตั้งชื่อไฟล์ .js .css ให้เหมือนกัน

11. การแสดงผลออกทางหน้าจอ จะอยู่ใน { xxxxxx } (เหมือน Angular นั้นแหละ )


12. ถ้าต้องการห่อ element ให้ห่อด้วย ()  เช่น var button = ( <button>AMC1234</button> )

13. ไฟล์ index.css พยายามไม่ต้องเข้าไปยุ่งกับมัน เพราะ มันเป็นการกำหนด style ให้กับ site ภายนอกทั้งหมด 

14. เราจะทำงานกับ style จริงๆ ที่ไฟล์ app.css 

15. เวลาจะกำหนดค่าให้ prop ของ html tag ให้ prop={ xxxx } เช่น img src={ xxx }

16. Build Deploy PRD : npm run-script build

17. หลังจาก build เสร็จ มันจะสร้าง Folder Build ข้างในจะเก็บ Static + css + js และ ทุกอย่างที่ใช้ในการ deploy


