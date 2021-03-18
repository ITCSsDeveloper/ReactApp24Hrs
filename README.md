# ReactApp24Hrs
ITCSsDeveloper/ReactApp24Hrs

เรามาลองดูกัน ใน 1 วัน เราจะทำอะไรได้บ้างเกี่ยวกับ ReactJs 

ผมจะเขียนเรื่องราว หรือ ขั้นตอนที่ผมอยากจะเขียนเป็นข้อๆ เป็นลำดับ (ไม่สำคัญว่าเพื่ออะไร เขียนไว้ให้ตัวเองครับ :D )

ณ ตอนนี้คงไม่ได้หาเวลาที่จะเขียนทุกอย่างให้ถูกต้อง 
เพียงแค่ต้องการอยากรู้ว่ามันทำไรได้บ้าง และ ทำได้แค่ไหน

หลังจากนั้น เมื่อเวลามีพอ จะขอทำให้ มันถูกต้อง

make it work, make it right, make it fast !
make it work ไปก่อนนะ 
:D

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

18. static file ที่เราต้องใช้ในโปรเจค ให้เอาเก็บไว้ที่ folder public เวลา build แล้ว มันจะเอาไฟล์ที่ อยู่ในนี้ออกไปด้วย

19. เราสามารถอ้างอิงไฟล์ที่อยู่ใน public ของเราได้ เช่น src="/images/logo.png"

20. import logo.svg นี่ยังไม่เข้าใจนะว่าเวลา build มันออกไปยังไง เพราะ ใน build มันไม่มีไฟล์ .svg ติดมาด้วย

21. การเขียน loop ใน jsx เราจะ loop แล้ว สร้าง element เก็บไว้ก่อนแล้วค่อยเอามาพ่นออก 
    ref : https://flaviocopes.com/react-how-to-loop/

22. เราจะใช้คำสั่ง array.map มาช่วยในการ เขียน loop ใน jsx
    {elements.map((value, index) => {
        return <li key={index}>{value}</li>
      })}

23. การเขียน style inline ใน jsx ถ้ามีขีด ให้ลบขีดแล้วเปลี่ยนเป็นตัวใหญ่ เช่น style={{marginTop: "100px"}} ( ปกติจะเขียน margin-top ) แต่ ใน jsx ถ้าเราเขียน - มันจะ error 

24. เข้าไปอ่านนิยามของ react แบบ ย่อๆ เร็วๆได้ที่ https://www.w3schools.com/react/react_jsx.asp

25. App.js หรือ Component เป็น สูงสุดของ Root 

26. เวลาเราจะขึ้น Component ใหม่ ให้ดูจาก App.js ก็ได้ เพราะ App.js ก็เป็น Component เช่นกัน 

27. Gatsby.js คืออีหยัง ??  เขาเครมว่าเป็น framework ที่เอาไว้ทำ static website เวลา coding ก็เป็น syntax เหมือน react (base on react) เวลา build ก็จะได้เป็น html โง่ๆมาไฟล์นึง แล้วเอาไป deploy ไว้ที่ webserver ได้เลย เครมว่าเร็ว

28. Gatsby.js base on react dom มันเป็นอะไรที่ wow มากเลยนะ การที่ไม่ต้องไปวุ่นวายกับ route url แค่สร้าง page ขึ้นมาเป็น .jsx แล้วก็สามารถ / url เรียกใช้ได้เลย (จริงๆ มันก็เหมือนกับการเรียกไฟล์ .php .html ผ่าน webServer นั้นแหละ แต่ อันนี้พอมันทำเสร็จมันจะ ได้เป็น static html และ จัดการ route มาให้ด้วย ซึ่ง มันเร็วกว่าวิ่งผ่าน webServer Process แน่นอน)

29. Next.js คืออีหยัง ?? เอาแบบคร่าวๆมันก็คือ server side rendering (SSR) นั้นเอง ความแตกต่างจาก React ก็คือ React จะ Render อยู่ฝั่ง Client อย่างเดียว ซึ่งเวลาตัว SEO มันมาเรียกเว็บเรา มันทำให้ไม่มีคอนเท้นไปแสดงใน SEO เลยเกิด Next.js ขึ้นมา เพื่อทำ SSR

30. Next.js เป็น Base On React เหมือนกันนั้นแหละ แต่มันมีตัว NextRoute มาให้ด้วย ทำให้เวลาเราสร้างไฟล์ เราไม่ต้องไปประกาศ Route เอง และ สามารถสร้าง Foloder ซ้อนเข้าไปได้ด้วยนะ แล้ว มันสามารถตั้งชื่อไฟล์ให้รับ parameter เข้าได้ด้วยนะ ง่ายมากๆ

31. อันนี้ไม่ได้เกี่ยวกับ React แต่อยากรู้ https://blogpedia.org/blogs/28/angular-directive-vs-components

32. React Component สร้างง่ายกว่า Angualr Component เพราะ Angular จะต้องกำหนด selector, กำหนด tempalte มีข้อกำหนดอีกเยอะ https://betterprogramming.pub/angular-vs-react-components-compared-b4f6782bc1d9

32. States คือ ข้อมูลที่อยู่ในตัว Component เป็นมูลที่สามารถเปลี่ยนแปลงได้ และ การเปลี่ยนแปลงจะส่งผลต่อหน้าเว็บที่เอา States ไปใช้ด้วย 

33. import React, { useState } from 'react';
    const [text, setText] =  useState('ทดสอบๆๆ');

34. การใช้ State ก็เหมือนกับการประกาศค่าตัวแปรของ Angular นั้นแหละ เพียงแต่เราต้องบอกก่อนว่า ตัวแปรนี้ต้องทำ State หรือเปล่า เพราะ ถ้าไม่ทำ State บอกไว้ เวลาค่ามีการอัพเดทที่ตัวแปร มันจะไม่แสดงผลที่หน้าจอ ( อารมณ์เหมือน $scope.$apply()  )

35. React สร้างโดย Facebook มีเทคโนโลยี virtual dom in memory ( Render only changed ) 

36. React ใช้งานบน Facebook ครั้งแรกเมื่อปี 2011 for Facebook's Newsfeed feature.

37. React สามารถเขียน เป็นแบบ html + babel  (ใช้ตัว React production min js )

38. React Props มันก็คือ function argments in js

39. Lifecycle of Components main phases =  Mounting, Updating, and Unmounting.
    Mounting = putting elements into the DOM.
        constructor()
        getDerivedStateFromProps()
        render()
        componentDidMount()
    The render() method is required and will always be called

40. 

    