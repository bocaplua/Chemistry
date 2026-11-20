const semesterQuiz = {
  choices: [
    ['hydrocarbon-methods', 'Cracking hoàn toàn một alkane X thu được CH₄, C₂H₄, C₂H₆ và C₃H₆, chiếm lần lượt 20%, 40%, 20% và 20% thể tích hỗn hợp khí. Công thức phân tử của X là gì?', ['C₄H₁₀', 'C₅H₁₂', 'C₆H₁₄', 'C₇H₁₆'], 1,
      'Trong 1 mol hỗn hợp sản phẩm có 2,0 mol nguyên tử C và 4,8 mol nguyên tử H. Bảo toàn nguyên tử cho tỉ lệ H/C của X bằng 4,8/2,0 = 2,4. Với alkane CₙH₂ₙ₊₂, ta có 2 + 2/n = 2,4, nên n = 5.'],
    ['hydrocarbon-methods', 'Có bao nhiêu arene C₉H₁₂ chứa một vòng benzene và đúng hai nhóm alkyl trên vòng?', ['2', '4', '5', '3'], 3,
      'Ngoài 6 carbon của vòng, hai nhóm alkyl có tổng 3 carbon, nên một nhóm là methyl và nhóm kia là ethyl. Hai nhóm có thể ở các vị trí 1,2; 1,3 hoặc 1,4, cho 3 đồng phân cấu tạo.'],
    ['hydrocarbon-methods', 'Pent-1-ene cộng HBr trong điều kiện thường, vắng mặt peroxide. Sản phẩm hữu cơ chính theo quy tắc Markovnikov là gì?', ['2-Bromopentane', '1-Bromopentane', '3-Bromopentane', '1,2-Dibromopentane'], 0,
      'H gắn chủ yếu vào carbon đầu mạch của liên kết đôi, làm Br gắn vào carbon số 2. Sản phẩm là CH₃CHBrCH₂CH₂CH₃.'],
    ['hydrocarbon-methods', 'Alkene nào sau đây có đồng phân hình học E/Z?', ['2-Methylbut-2-ene', 'Pent-1-ene', '3-Methylpent-2-ene', '2-Methylbut-1-ene'], 2,
      'Mỗi carbon của C=C cần gắn với hai nhóm khác nhau. Trong 3-methylpent-2-ene, carbon bên trái gắn H và methyl, carbon bên phải gắn methyl và ethyl. Ba chất còn lại đều có một carbon của C=C mang hai nhóm giống nhau.'],
    ['spectra', 'Ion phân tử của một hydrocarbon mạch hở có m/z = 54 và điện tích +1. Chất này chỉ có một liên kết ba, còn lại là liên kết đơn, và tạo kết tủa với thuốc thử bạc amoniac. Chất nào phù hợp?', ['Ethyne', 'But-1-yne', 'But-2-yne', 'Propene'], 1,
      'Với một liên kết ba, công thức của alkyne mạch hở là CₙH₂ₙ₋₂. Khối lượng danh định 14n − 2 = 54 nên n = 4. Phản ứng với thuốc thử bạc amoniac cho biết liên kết ba ở đầu mạch, tương ứng but-1-yne.'],
    ['spectra', 'Phổ IR của một hợp chất cho dải rất rộng trong vùng khoảng 2500–3300 cm⁻¹ và đỉnh hấp thụ mạnh gần 1710 cm⁻¹. Chất nào phù hợp nhất với cả hai tín hiệu?', ['Propanal', 'Propanone', 'Propan-1-ol', 'Propanoic acid'], 3,
      'Dải rất rộng trong vùng 2500–3300 cm⁻¹ phù hợp với O–H của carboxylic acid. Đỉnh mạnh gần 1710 cm⁻¹ phù hợp với C=O. Nhóm –COOH có cả hai liên kết.'],
    ['separation', 'Một chất màu tan tốt trong dung môi hữu cơ X, tan rất ít trong nước. X và nước tạo hai lớp riêng. Phương pháp nào thích hợp để chuyển chất màu từ dung dịch nước sang X?', ['Lọc qua giấy lọc', 'Kết tinh bằng làm lạnh', 'Chiết lỏng–lỏng', 'Chưng cất phân đoạn'], 2,
      'Hai dung môi tạo hai lớp và chất màu ưu tiên hòa tan trong X. Chiết lỏng–lỏng tận dụng sự phân bố đó rồi tách riêng lớp giàu chất màu.'],
    ['energy', 'Một phản ứng có ΔᵣH = −250 kJ cho mỗi mol chất X phản ứng. Khi 0,20 mol X phản ứng hết theo phương trình, kết luận nào đúng?', ['Phản ứng tỏa 50 kJ', 'Phản ứng thu 50 kJ', 'Phản ứng tỏa 250 kJ', 'Phản ứng thu 1250 kJ'], 0,
      'Nhân biến thiên enthalpy với số mol X cho ΔH = 0,20 × (−250) = −50 kJ. Dấu âm cho thấy hệ tỏa nhiệt. Lượng nhiệt tỏa ra được báo là 50 kJ.']
  ],
  statements: [
    ['separation', 'Độ tan của X là 32 g trên 100 g nước ở 80 °C và 8 g trên 100 g nước ở 20 °C. Làm nguội dung dịch bão hòa gồm 32 g X và 100 g nước từ 80 °C xuống 20 °C. Coi nước không bay hơi và hệ đạt cân bằng.', [
      ['Trước khi làm nguội, khối lượng dung dịch là 132 g.', true, 'Khối lượng dung dịch bằng 32 g chất tan cộng 100 g nước, tức 132 g.'],
      ['Ở 20 °C, vẫn còn 32 g X hòa tan trong 100 g nước.', false, 'Ở 20 °C, 100 g nước chỉ hòa tan tối đa 8 g X theo độ tan đã cho.'],
      ['Khi làm nguội, có 24 g X kết tinh.', true, 'Lượng X chuyển khỏi dung dịch là 32 − 8 = 24 g.'],
      ['Nếu lọc dung dịch ở 80 °C trước khi hạ nhiệt, giấy lọc giữ lại 24 g X.', false, 'Ở 80 °C, toàn bộ 32 g X đang hòa tan. Trong bài này, phải hạ nhiệt để kết tinh rồi mới lọc lấy chất rắn.']
    ]],
    ['hydrocarbon-methods', 'So sánh hai hydrocarbon X là 2-methylbutane và Y có cấu tạo CH₃CH=CHCH₂CH₃.', [
      ['X chỉ có hai dẫn xuất monochloro khác nhau về công thức cấu tạo.', false, 'Hai nhóm methyl cùng gắn với carbon bậc III tương đương. Nhóm methyl cuối mạch, carbon CH₂ và carbon bậc III cho thêm ba vị trí thế khác nhau, nên có bốn dẫn xuất cấu tạo.'],
      ['X có ba nguyên tử carbon bậc I và một nguyên tử carbon bậc III.', true, 'Trong CH₃CH(CH₃)CH₂CH₃, ba carbon của các nhóm methyl có bậc I, carbon mang nhánh có bậc III và carbon CH₂ có bậc II.'],
      ['Y có hai đồng phân hình học E/Z.', true, 'Mỗi carbon của nối đôi gắn H và một nhóm alkyl. Vì hai nhóm trên mỗi carbon khác nhau nên có hai cách sắp xếp hình học.'],
      ['Khi cộng H₂ hoàn toàn vào nối đôi của Y, sản phẩm hữu cơ là X.', false, 'Cộng H₂ bão hòa nối đôi và giữ nguyên khung năm carbon mạch thẳng. Sản phẩm là pentane, còn X có mạch nhánh.']
    ]]
  ],
  numbers: [
    ['separation', 'Ở nhiệt độ đang xét, độ tan của chất B là 22,5 g trong 100 g dung môi. Tính khối lượng B trong 147 g dung dịch bão hòa. Làm tròn đến hàng phần mười.', 27, 'g', '27,0 g',
      'Một phần dung dịch bão hòa gồm 22,5 g B và 100 g dung môi, tổng 122,5 g. Khối lượng B trong 147 g dung dịch là 147 × 22,5/122,5 = 27,0 g.'],
    ['energy', 'Ước tính ΔᵣH cho phản ứng C₂H₄(g) + H₂(g) → C₂H₆(g), theo các năng lượng liên kết sau (kJ/mol): C=C là 612, C–C là 348, H–H là 436 và C–H là 413. Nhập kết quả có dấu, theo kJ cho phương trình đã viết.', -126, 'kJ', '−126 kJ',
      'Bốn liên kết C–H có cả trước và sau phản ứng, nên triệt tiêu khi tính chênh lệch. Phá vỡ một C=C và một H–H cần 612 + 436 = 1048 kJ. Hình thành một C–C và hai C–H giải phóng 348 + 2 × 413 = 1174 kJ. Hiệu 1048 − 1174 = −126 kJ.'],
    ['hydrocarbon-methods', 'Một sơ đồ sản xuất PE tính theo hai bước. Bước một chuyển ethyne thành ethene theo tỉ lệ mol 1:1, hiệu suất 70%. Bước hai trùng hợp ethene, thu được 75% khối lượng PE tối đa từ lượng ethene vào bước hai. Từ 104 kg ethyne, tính khối lượng PE thu được, làm tròn đến hàng phần mười. Dùng M(C₂H₂) = 26 và M(C₂H₄) = 28 g/mol.', 58.8, 'kg', '58,8 kg',
      'Ban đầu có 104/26 = 4,00 kmol ethyne. Bước một thu 4,00 × 0,70 = 2,80 kmol ethene. Trùng hợp cộng không tạo phân tử nhỏ, nên khối lượng PE tối đa là 2,80 × 28 = 78,4 kg. Thực tế thu 78,4 × 0,75 = 58,8 kg.'],
    ['energy', 'Đốt cháy hoàn toàn 4,958 L hỗn hợp khí chứa 70% methane và 30% ethane theo thể tích ở 25 °C và 1 bar. Lấy thể tích mol khí là 24,79 L/mol. Mỗi mol methane và ethane tỏa lần lượt 890 kJ và 1560 kJ. Tính nhiệt lượng tỏa ra theo MJ, làm tròn đến hàng phần nghìn.', 0.218, 'MJ', '0,218 MJ',
      'Hỗn hợp có 4,958/24,79 = 0,200 mol. Lượng methane là 0,140 mol và ethane là 0,060 mol. Nhiệt lượng tỏa ra là 0,140 × 890 + 0,060 × 1560 = 218,2 kJ, tương đương 0,2182 MJ. Làm tròn được 0,218 MJ.']
  ]
};
