const semesterFoundations = {
  details: {
    spectra: {
      sections: [
        ['Đọc công thức khung', 'Mỗi đầu mút và điểm gấp khúc không ghi kí hiệu là một carbon. Tính liên kết đơn, đôi, ba lần lượt là 1, 2, 3. Thêm H cho carbon trung hòa để tổng bậc liên kết bằng 4. Đếm riêng H viết cạnh nguyên tố khác, ví dụ H của –OH.'],
        ['Từ phần trăm khối lượng đến công thức', 'Giả sử có 100 g chất. Chia khối lượng từng nguyên tố cho khối lượng mol nguyên tử. Chia các kết quả cho số nhỏ nhất rồi quy về tỉ lệ nguyên tối giản. Chia khối lượng mol phân tử cho khối lượng mol ứng với công thức tối giản để tìm hệ số nhân.'],
        ['Phân biệt hai đỉnh trên phổ MS', 'Trục ngang là m/z, trục đứng là cường độ tương đối. Đỉnh nền cao nhất (100%) có thể là ion mảnh. Dùng m/z tại đỉnh ion phân tử M⁺ (điện tích +1) để suy ra khối lượng phân tử danh định. Đỉnh đồng vị có thể nằm bên phải đỉnh M⁺.'],
        ['Đọc kết hợp hai vùng trên phổ IR', 'Acid carboxylic no thường có dải O–H rất rộng (khoảng 2500–3300 cm⁻¹) và C=O mạnh gần 1710 cm⁻¹. Dải C=O riêng lẻ chỉ cho thấy nhóm carbonyl. Trên đồ thị độ truyền qua, dải hấp thụ lõm xuống.']
      ],
      examples: [
        ['Một hợp chất chứa 54,55% C, 9,09% H, còn lại là O. Phổ MS có đỉnh nền m/z = 43 và đỉnh ion phân tử M⁺ tại m/z = 88. Tìm công thức phân tử, lấy C = 12, H = 1, O = 16.',
         'Trong 100 g chất, tỉ lệ mol C : H : O ≈ 54,55/12 : 9,09/1 : 36,36/16 ≈ 4,55 : 9,09 : 2,27 ≈ 2 : 4 : 1. Công thức đơn giản nhất là C₂H₄O, ứng với 44 g/mol. M⁺ cho M ≈ 88 g/mol. Hệ số 88/44 = 2, nên công thức phân tử là C₄H₈O₂.'],
        ['Phổ IR của một hợp chất có dải rất rộng 2550–3250 cm⁻¹ và dải mạnh tại 1712 cm⁻¹. Giả thuyết nào phù hợp: alcohol đơn chức no hay carboxylic acid no?',
         'Dải 1712 cm⁻¹ phù hợp C=O và dải rộng phù hợp O–H của –COOH. Hai dải này phù hợp với carboxylic acid.']
      ],
      practice: [
        ['basic','Trong công thức khung, một điểm gấp khúc không ghi kí hiệu đại diện nguyên tử nào?',
         ['O','C','H'],1,'Điểm gấp khúc không ghi kí hiệu là carbon. Suy ra H từ số liên kết.'],
        ['basic','Trong phổ khối lượng, đỉnh cao nhất về cường độ tên là gì?',
         ['Đỉnh nền','Đỉnh đồng vị','Đỉnh ion phân tử trong mọi trường hợp'],0,'Đỉnh nền được đặt cường độ tương đối 100%. Đỉnh này có thể là ion mảnh hoặc ion phân tử.'],
        ['apply','Mạch hở có bốn C nối tiếp bằng liên kết đơn. Một C đầu mạch có liên kết C=O. Tìm công thức phân tử.',
         ['C₄H₁₀O','C₄H₆O','C₄H₈O'],2,'Ba C còn lại có lần lượt 3, 2 và 2 H khi đếm từ đầu xa nhóm C=O. C đầu mạch có C=O đã dùng ba bậc liên kết nên có 1 H. Tổng là 8 H.'],
        ['apply','Phổ IR có dải hấp thụ rất rộng khoảng 2500–3300 cm⁻¹ và dải mạnh gần 1710 cm⁻¹. Cặp liên kết nào giải thích hợp lí hai dải?',
         ['C–H và C–C','O–H của –COOH và C=O','N–H và C≡N'],1,'Tổ hợp dải O–H rất rộng và dải C=O là dấu hiệu của nhóm carboxyl trong các chất thường gặp.'],
        ['challenge','Một hợp chất chứa 62,07% C, 10,34% H và 27,59% O. Đỉnh M⁺ có m/z = 116, còn đỉnh nền ở m/z = 43. Lấy C = 12, H = 1, O = 16. Công thức phân tử nào phù hợp?',
         ['C₃H₆O','C₅H₈O₃','C₆H₁₂O₂'],2,'Tỉ lệ (62,07/12) : (10,34/1) : (27,59/16) ≈ 3 : 6 : 1. Đơn vị C₃H₆O có khối lượng 58. M⁺ cho khối lượng 116, nên nhân các chỉ số với 2.'],
        ['challenge','Một chất có công thức đơn giản nhất CH₂O. Phổ MS có đỉnh nền tại 31, đỉnh M⁺ tại 60 và đỉnh đồng vị tại 61. IR có dải O–H rất rộng cùng dải C=O. Kết luận nào phù hợp?',
         ['C₂H₄O₂ và phổ IR phù hợp nhóm –COOH','CH₂O và chỉ có nhóm alcohol','C₂H₄O₂ và phổ IR loại trừ mọi nhóm carbonyl'],0,'Đơn vị CH₂O có khối lượng 30, nên M⁺ tại 60 cho C₂H₄O₂. Cặp O–H rất rộng và C=O phù hợp nhóm –COOH.']
      ]
    },
    separation: {
      sections: [
        ['Chiết và xác định lớp chất lỏng', 'Chiết lỏng–lỏng dựa vào sự phân bố của chất tan giữa hai pha khó trộn lẫn. Chất có xu hướng tập trung ở pha mà nó tan tốt hơn. Pha có khối lượng riêng nhỏ hơn nằm trên.'],
        ['Chưng cất theo độ bay hơi', 'Ở cùng áp suất, chất có nhiệt độ sôi thấp thường dễ bay hơi hơn. Tháp chưng cất phân đoạn thu phần có khoảng sôi thấp ở phía trên mát hơn và phần có khoảng sôi cao gần đáy.'],
        ['Sắc kí và tương tác với pha tĩnh', 'Pha động mang các chất đi qua pha tĩnh. Khi so sánh trong cùng một cột, cùng pha động và cùng thời điểm, chất tương tác mạnh hơn với pha tĩnh thường đi được quãng đường ngắn hơn.'],
        ['Đọc độ tan theo khối lượng dung môi', 'Ở một nhiệt độ, độ tan S nghĩa là 100 g dung môi hòa tan tối đa S g chất, tạo 100 + S g dung dịch bão hòa. Khi hạ nhiệt làm giảm độ tan, tính lượng còn tan theo S mới. Lượng kết tinh là lượng chất ban đầu trừ phần còn tan.']
      ],
      examples: [
        ['Có 280 g dung dịch bão hòa ở nhiệt độ cao, độ tan khi đó là 40 g/100 g nước. Hạ nhiệt đến mức độ tan còn 15 g/100 g nước. Tính khối lượng tinh thể khan thu được, coi nước không bay hơi.',
         'Cứ 140 g dung dịch nóng gồm 100 g nước và 40 g chất tan. Trong 280 g có 200 g nước và 80 g chất tan. Khi lạnh, 200 g nước giữ được 2 × 15 = 30 g chất tan. Vậy 80 − 30 = 50 g chất tách thành tinh thể.'],
        ['Một cột sắc kí có dòng đi từ trên xuống. Cùng thời điểm, chất A cách đầu cột 2 cm còn B cách đầu cột 6 cm. Chất nào được pha tĩnh giữ mạnh hơn trong điều kiện đã cho?',
         'A đi ngắn hơn trong cùng thời gian, nên bị pha tĩnh giữ mạnh hơn.']
      ],
      practice: [
        ['basic','Một pha có khối lượng riêng 0,80 g/mL, pha kia 1,00 g/mL. Hai pha không trộn lẫn. Pha nào nằm trên?',
         ['Pha 1,00 g/mL','Hai pha luân phiên đổi chỗ','Pha 0,80 g/mL'],2,'Pha có khối lượng riêng nhỏ hơn nổi phía trên.'],
        ['basic','Chưng cất phân đoạn một hỗn hợp lỏng tách các cấu tử chủ yếu dựa vào tính chất nào?',
         ['Khác biệt độ bay hơi','Khác biệt màu sắc','Khác biệt kích thước tinh thể'],0,'Bay hơi và ngưng tụ nhiều lần giúp tách cấu tử theo độ bay hơi.'],
        ['apply','Ở nhiệt độ đã cho, S = 25 g/100 g nước. Trong 200 g dung dịch bão hòa có bao nhiêu gam chất tan?',
         ['50 g','40 g','25 g'],1,'125 g dung dịch bão hòa có 25 g chất tan. Trong 200 g có 200 × 25/125 = 40 g chất tan.'],
        ['apply','Trong cùng một cột sắc kí, sau một thời gian các chất P, Q, R đi lần lượt 2, 4 và 7 cm tính từ điểm nạp mẫu. Thứ tự bị pha tĩnh giữ mạnh đến yếu là gì?',
         ['R, Q, P','P, R, Q','P, Q, R'],2,'Quãng đường càng ngắn trong điều kiện giống nhau thì chất càng bị pha tĩnh giữ mạnh.'],
        ['challenge','Ban đầu có 260 g dung dịch bão hòa với S = 30 g/100 g nước. Sau khi 25 g nước bay hơi, làm lạnh để độ tan còn 20 g/100 g nước. Tính tổng khối lượng tinh thể khan thu được. Coi toàn bộ chất tan còn trong hệ.',
         ['25 g','35 g','20 g'],0,'Ban đầu có 200 g nước và 60 g chất tan. Sau bay hơi còn 175 g nước. Khi lạnh, lượng chất còn tan là 175 × 20/100 = 35 g. Tổng tinh thể là 60 − 35 = 25 g.'],
        ['challenge','Một hỗn hợp gồm pha nước và một pha nhẹ hơn, không trộn lẫn với nước. Hai cấu tử lỏng cần thu nằm trong pha nhẹ và có nhiệt độ sôi khác nhau. Ghép hai phương pháp nào cho phù hợp?',
         ['Sắc kí cột, rồi kết tinh cả pha nước','Tách hai lớp bằng chiết, rồi chưng cất phân đoạn pha nhẹ','Chưng cất phân đoạn pha nước, rồi lọc pha nhẹ qua giấy'],1,'Tách hai pha theo sự không trộn lẫn và khối lượng riêng. Tiếp đó dựa vào độ bay hơi khác nhau để tách hai cấu tử trong pha nhẹ.']
      ]
    }
  },
  extra: [
    {
      id: 'spectra', grade: 11, title: 'Công thức khung, phổ MS và phổ IR',
      summary: 'Đọc cấu trúc, tìm công thức phân tử và nhận dấu hiệu nhóm chức trên phổ.',
      theory: [
        'Công thức phân tử cho số nguyên tử mỗi nguyên tố. Công thức đơn giản nhất cho tỉ lệ nguyên tử tối giản.',
        'Đỉnh ion phân tử trên phổ MS có thể cho khối lượng phân tử. Phổ IR hỗ trợ nhận nhóm chức.'
      ],
      example: 'X có công thức đơn giản nhất CH₂ và đỉnh M⁺ tại m/z = 56. Tìm công thức phân tử (C = 12, H = 1).',
      solution: 'CH₂ ứng với khối lượng 12 + 2 = 14. Đỉnh M⁺ cho M ≈ 56 g/mol, nên hệ số nhân là 56/14 = 4. Công thức phân tử là C₄H₈.',
      questions: [
        ['Rút gọn C₆H₁₂O₆ về công thức đơn giản nhất.',
         ['CH₂O','C₃H₆O₃','C₆H₁₂O₆'],0,'Ước chung lớn nhất của 6, 12 và 6 là 6. Tỉ lệ tối giản là 1 : 2 : 1.'],
        ['Phổ đã đánh dấu đỉnh ion phân tử M⁺ tại m/z = 74. Khối lượng mol phân tử gần bằng bao nhiêu?',
         ['37 g/mol','74 g/mol','148 g/mol'],1,'M⁺ mang điện tích +1 nên m/z = 74 cho M ≈ 74 g/mol.']
      ]
    },
    {
      id: 'separation', grade: 11, title: 'Tách chất hữu cơ và độ tan',
      summary: 'Chọn giữa chiết, chưng cất, sắc kí và kết tinh dựa trên tính chất của hỗn hợp.',
      theory: [
        'Chọn phương pháp dựa vào tính chất khác nhau giữa các cấu tử, như độ tan hoặc độ bay hơi.',
        'Dung dịch bão hòa chứa lượng chất tan tối đa tại nhiệt độ đang xét.'
      ],
      example: 'Ở nhiệt độ đã cho, S = 18 g/100 g nước. Tính lượng chất tối đa có thể tan trong 150 g nước và tổng khối lượng dung dịch bão hòa.',
      solution: 'Lượng chất tối đa là 150 × 18/100 = 27 g. Khối lượng dung dịch bão hòa là 150 + 27 = 177 g.',
      questions: [
        ['Trong mô hình tháp chưng cất phân đoạn, các phân đoạn có nhiệt độ sôi cao hơn thu ở đâu?',
         ['Gần đỉnh tháp','Ở mọi tầng như nhau','Gần đáy tháp'],2,'Phía đáy gần nguồn nhiệt hơn. Các phân đoạn kém bay hơi ngưng tụ ở vùng thấp hơn.'],
        ['Độ tan S = 12 g/100 g nước nghĩa là gì?',
         ['100 g nước hòa tan tối đa 12 g chất ở nhiệt độ đã cho','100 g dung dịch bão hòa luôn có 12 g chất tan','12 g nước hòa tan tối đa 100 g chất'],0,'Mẫu số của S là khối lượng dung môi. 100 g nước và 12 g chất tan tạo 112 g dung dịch bão hòa.']
      ]
    }
  ]
};
