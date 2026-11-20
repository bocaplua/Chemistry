const semesterHydrocarbons = {
  details: {
    'hydrocarbon-methods': {
      sections: [
        ['Thế một H trong alkane', 'Đánh dấu từng vị trí H rồi so sánh sản phẩm khi thay một H ở mỗi vị trí. Hai cách đánh số hoặc vẽ mạch mà đưa đến cùng công thức cấu tạo chỉ tính một lần. Ví dụ hai đầu của mạch butane tương đương, nên thay H ở một trong hai đầu đều tạo cùng dẫn xuất. Khi đề chỉ hỏi đồng phân cấu tạo, chưa cần tách đồng phân lập thể.'],
        ['Đếm đồng phân arene theo số carbon ngoài vòng', 'Giữ vòng benzene và phân chia số carbon còn lại thành các nhóm thế. Với hai nhóm thế trên vòng, thử lần lượt 1,2 (ortho), 1,3 (meta) và 1,4 (para). Với một nhóm alkyl có từ ba carbon, vẽ cả mạch thẳng và nhánh nếu có. Cuối cùng kiểm tra các hình có trùng nhau khi quay hoặc đổi chiều đánh số vòng.'],
        ['Cracking và bảo toàn nguyên tử', 'Cracking bẻ gãy mạch để tạo các phân tử nhỏ hơn. Trong bài cho đúng hai sản phẩm, lấy số nguyên tử C và H của chất đầu trừ phần đã biết để tìm phần còn lại. Một alkane có thể cho một alkane nhỏ hơn và một alkene trong sơ đồ đơn giản. Cracking thực tế thường tạo hỗn hợp nhiều chất.'],
        ['Cộng HX vào nối đôi và nối ba', 'Với alkene hoặc alkyne đầu mạch trong điều kiện cộng HX theo Markovnikov, xác định hai carbon của liên kết bội. H ưu tiên vào carbon đang mang nhiều H hơn và X vào carbon còn lại. Alkyne đầu mạch cộng một mol HX trên mỗi mol alkyne vẫn còn nối đôi. Với hai mol HX, bài tập cơ bản thường cho hai nguyên tử X trên cùng carbon. Với HBr, cần đọc xem đề có nêu peroxide hay không.'],
        ['Nhận ra nối ba đầu mạch và điều kiện cis/trans', 'Alkyne đầu mạch có đoạn ≡C–H. H này có thể bị thay bằng Ag trong phép nhận biết bằng ion bạc trong môi trường ammoniac, còn alkyne có nối ba ở giữa thì không có H ở vị trí đó. Với đồng phân hình học của alkene, kiểm tra riêng từng carbon của C=C. Mỗi carbon phải nối với hai nhóm khác nhau để có hai cấu hình. Đầu =CH₂ có hai H giống nhau nên không đạt điều kiện.']
      ],
      examples: [
        ['Đếm số dẫn xuất monochloro có công thức cấu tạo khác nhau khi thay đúng một H của pentane mạch thẳng.', 'Hai đầu C1 và C5 tương đương, cho 1-chloropentane. C2 và C4 tương đương, cho 2-chloropentane. C3 cho 3-chloropentane. Vậy có 3 đồng phân cấu tạo.'],
        ['Pent-1-yne cộng HBr theo hướng Markovnikov, không có peroxide. Viết sản phẩm chính khi cộng lần lượt một và hai mol HBr trên mỗi mol alkyne.', 'Ở lần cộng thứ nhất, carbon đầu mạch nhận H, carbon kế bên nhận Br, tạo CH₂=C(Br)CH₂CH₂CH₃. Lần cộng thứ hai chuyển –CH₂ đầu nối đôi thành CH₃ và thêm Br vào carbon đã có Br. Sản phẩm là CH₃CBr₂CH₂CH₂CH₃, tức 2,2-dibromopentane.']
      ],
      practice: [
        ['basic', 'Trong pent-1-yne, H dùng để nhận biết nối ba đầu mạch nằm ở đâu?', ['Trên carbon đầu mạch của C≡C', 'Trên carbon ngay cạnh nối ba nhưng nằm ngoài C≡C', 'Trên mọi carbon của mạch'], 0, 'Công thức HC≡CCH₂CH₂CH₃ cho thấy H liên kết trực tiếp với carbon đầu của C≡C.'],
        ['basic', 'Chất nào có hai đồng phân hình học cis/trans?', ['Pent-1-ene', 'Hex-3-ene', '2-Methylbut-2-ene'], 1, 'Trong hex-3-ene, mỗi carbon của C=C gắn với một H và một gốc ethyl. Pent-1-ene có đầu =CH₂. Trong 2-methylbut-2-ene, một carbon của C=C gắn hai gốc methyl.'],
        ['apply', 'Một sơ đồ cracking cho C₁₀H₂₂ → C₄H₁₀ + X. Công thức phân tử của X là gì?', ['C₆H₁₀', 'C₆H₁₄', 'C₆H₁₂'], 2, 'Cân bằng riêng từng nguyên tố. X có 10 − 4 = 6 carbon và 22 − 10 = 12 hydrogen.'],
        ['apply', 'But-1-ene cộng HCl theo hướng Markovnikov. Sản phẩm hữu cơ chính nào phù hợp?', ['2-Chlorobutane', '1-Chlorobutane', '1,2-Dichlorobutane'], 0, 'H vào carbon số 1 đang có hai H. Cl gắn vào carbon số 2. Cộng một HCl chỉ đưa một Cl vào phân tử.'],
        ['challenge', 'Có bao nhiêu dẫn xuất monochloro khác nhau về cấu tạo khi thay đúng một H của 3-methylpentane?', ['3', '4', '5'], 1, 'Bốn nhóm H cho cấu tạo khác nhau nằm ở hai đầu C1/C5, hai vị trí C2/C4, carbon C3 và nhánh methyl gắn C3. Mỗi cặp vị trí đối xứng chỉ tính một lần.'],
        ['challenge', 'Có bao nhiêu arene một vòng benzene, có các nhóm thế alkyl, mang công thức phân tử C₉H₁₂?', ['6', '7', '8'], 2, 'Ba carbon ngoài vòng có thể tạo một nhóm propyl theo 2 cách, một nhóm ethyl và một nhóm methyl ở 3 vị trí tương đối, hoặc ba nhóm methyl ở 3 kiểu là 1,2,3; 1,2,4; 1,3,5. Tổng là 2 + 3 + 3 = 8.']
      ]
    },
    'halogen-derivatives': {
      sections: [
        ['Gọi tên và xác định bậc', 'Chọn mạch chính, đánh số để bộ chỉ số vị trí các nhóm thế nhỏ nhất rồi dùng tiền tố fluoro-, chloro-, bromo- hoặc iodo-. Với dẫn xuất halogen trên carbon no, xác định bậc bằng cách đếm số carbon gắn trực tiếp với carbon mang X. Halogen không được tính vào số đó.'],
        ['Đọc dung môi trước khi chọn sản phẩm', 'Trong sơ đồ phổ thông, đun một dẫn xuất alkyl thích hợp với NaOH trong nước thường ưu tiên thế X bằng –OH để tạo alcohol. KOH trong ethanol và đun nóng thường ưu tiên tách HX để tạo alkene, nước và muối halide. Ghi rõ dung môi và điều kiện trên mũi tên.'],
        ['Tìm H ở carbon kề rồi chọn sản phẩm chính', 'Vẽ carbon mang X và liệt kê các carbon kề có H. Cứ xét bớt X và một H ở carbon kề rồi tạo C=C giữa hai carbon đó. Theo xu hướng Zaitsev khi dùng base nhỏ trong các bài phổ thông, alkene có nhiều nhóm alkyl gắn vào C=C thường là sản phẩm chính. Kiểm tra các sản phẩm trùng cấu tạo trước khi xét E/Z.'],
        ['Nhìn đúng carbon gắn X và đọc hiện tượng AgX', 'Trong C₆H₅Cl, Cl gắn trực tiếp lên vòng. Trong C₆H₅CH₂Cl, Cl gắn với carbon no ở nhánh. Tương tự, phân biệt X gắn trực tiếp với C=C và X gắn ở carbon no ngay cạnh C=C. Dẫn xuất aryl hoặc vinyl thường không bị thủy phân với NaOH loãng trong bài phổ thông. Trong câu nhận biết sau thủy phân, Ag⁺ tạo kết tủa với ion halide đã thoát ra. Môi trường acid nitric giúp loại ảnh hưởng của OH⁻ dư khi dùng Ag⁺ để phát hiện halide.'],
        ['Đọc tốc độ theo mô hình SN1 và SN2', 'Trong bài dùng mô hình SN1, bước chậm là tách X⁻ để tạo carbocation, nên tốc độ chỉ phụ thuộc nồng độ chất mang X. Trong mô hình SN2, tạo liên kết C–O và đứt C–X xảy ra cùng bước, nên tốc độ phụ thuộc cả chất mang X và OH⁻. Dẫn xuất bậc III thường thuận lợi cho SN1 khi carbocation bền, còn carbon bậc I ít bị che chắn nên thường thuận lợi cho SN2.']
      ],
      examples: [
        ['Hoàn thành sơ đồ pent-1-ene → A khi cộng HBr (không peroxide) → B khi đun với NaOH trong nước. Viết hai phương trình.', 'Cộng Markovnikov cho CH₂=CHCH₂CH₂CH₃ + HBr → CH₃CHBrCH₂CH₂CH₃, nên A là 2-bromopentane. Thế trong NaOH nước cho CH₃CHBrCH₂CH₂CH₃ + NaOH → CH₃CH(OH)CH₂CH₂CH₃ + NaBr, nên B là pentan-2-ol. Cộng quyết định vị trí Br, sau đó thế giữ vị trí carbon mang nhóm chức.'],
        ['Liệt kê các alkene khác nhau về cấu tạo khi tách HX từ 2-chloropentane. Dự đoán sản phẩm chính trong sơ đồ KOH/ethanol, đun nóng.', 'Carbon mang Cl là C2. Nếu lấy H ở C1, nối đôi C1=C2 cho pent-1-ene. Nếu lấy H ở C3, C2=C3 cho pent-2-ene. Pent-2-ene có hai nhóm alkyl gắn vào C=C, so với một nhóm ở pent-1-ene, nên thường là sản phẩm chính.']
      ],
      practice: [
        ['basic', 'Trong (CH₃)₂CHCH₂Br, carbon mang Br có bậc mấy?', ['Bậc I', 'Bậc II', 'Bậc III'], 0, 'Br gắn vào carbon của –CH₂Br. Carbon đó chỉ gắn trực tiếp với một carbon khác.'],
        ['basic', 'Gốc nào do tia UV giải phóng từ CFC chứa chlorine và có thể xúc tác phá hủy ozone?', ['H·', 'Cl·', 'Na·'], 1, 'UV có thể cắt liên kết C–Cl. Gốc Cl· tham gia chu trình trong đó ozone bị tiêu hao và gốc Cl· có thể tái sinh.'],
        ['apply', 'Cặp chất nào gồm một dẫn xuất vinyl khó thủy phân và một dẫn xuất có X ở carbon no cạnh nối đôi dễ thế hơn?', ['CH₃CH₂Cl và CH₃CH₂Br', 'C₆H₅Cl và CH₂=CHCl', 'CH₃CH=CHCl và CH₂=CHCH₂Cl'], 2, 'Ở chất thứ nhất trong đáp án, Cl liên kết trực tiếp với carbon của C=C. Ở chất thứ hai, Cl gắn với carbon no của –CH₂Cl cạnh C=C.'],
        ['apply', 'Trong mô hình bài phổ thông, dùng KOH trong ethanol và đun nóng với 2-bromohexane thường ưu tiên sản phẩm nào?', ['Hex-2-ene', 'Hexan-2-ol', 'Hex-1-ene'], 0, 'Có thể tách H ở C1 hoặc C3. Theo xu hướng Zaitsev, alkene thế nhiều hơn là hex-2-ene thường chiếm ưu thế.'],
        ['challenge', 'Tách HX từ 3-bromo-3-methylpentane có thể tạo bao nhiêu alkene nếu tính cả E/Z, chỉ xét tách một lần ở các carbon kề?', ['2', '3', '4'], 1, 'Hai nhánh ethyl tương đương. Tách H trên một nhánh ethyl cho 3-methylpent-2-ene có hai cấu hình E/Z. Tách H trên nhánh methyl cho CH₂=C(CH₂CH₃)₂, không có E/Z. Tổng cộng 3.'],
        ['challenge', 'Trong mô hình SN2, gấp đôi nồng độ chất mang X và gấp ba nồng độ OH⁻ ở cùng nhiệt độ. Tốc độ ban đầu thay đổi thế nào?', ['Tăng 5 lần', 'Tăng 3 lần', 'Tăng 6 lần'], 2, 'Tốc độ tỉ lệ với tích hai nồng độ trong mô hình SN2. Hệ số tăng là 2 × 3 = 6. Nếu là mô hình SN1, chỉ việc gấp đôi nồng độ chất mang X làm tốc độ tăng 2 lần.']
      ]
    }
  },
  extra: [
    {
      id: 'hydrocarbon-methods',
      grade: 11,
      title: 'Hydrocarbon · Đếm đồng phân và viết phản ứng',
      summary: 'Luyện thế H, đếm arene, đọc sơ đồ cracking và dự đoán hướng cộng vào liên kết bội.',
      theory: [
        'Với câu đếm, xác định đề hỏi công thức cấu tạo hay tính cả đồng phân hình học. Hãy đối chiếu các vị trí tương đương do đối xứng.',
        'Với câu viết phản ứng, ghi rõ chất đầu, tác nhân và điều kiện rồi kiểm tra số nguyên tử C, H và nhóm chức ở sản phẩm.'
      ],
      example: 'Liệt kê các arene một vòng benzene với nhóm thế alkyl có công thức C₈H₁₀.',
      solution: 'Hai carbon ngoài vòng có thể tạo một nhánh ethyl, cho ethylbenzene. Nếu chia thành hai nhánh methyl thì có 1,2-dimethylbenzene, 1,3-dimethylbenzene và 1,4-dimethylbenzene. Tổng cộng có 4 cấu tạo.',
      questions: [
        ['Khi thay đúng một H của propane bằng Cl, có bao nhiêu sản phẩm khác nhau về cấu tạo?', ['2', '3', '1'], 0, 'Hai đầu CH₃ tương đương, cho 1-chloropropane. Vị trí CH₂ ở giữa cho 2-chloropropane.'],
        ['Alkyne nào có H gắn trực tiếp với carbon của nối ba?', ['But-2-yne', 'But-1-yne', 'Hex-3-yne'], 1, 'But-1-yne có cấu tạo HC≡CCH₂CH₃. Hai chất còn lại có nối ba ở giữa mạch.']
      ]
    },
    {
      id: 'halogen-derivatives',
      grade: 11,
      title: 'Dẫn xuất halogen · Phản ứng thế và phản ứng tách',
      summary: 'Đọc dung môi, tìm sản phẩm chính và phân biệt vị trí gắn halogen.',
      theory: [
        'Dẫn xuất halogen có thể xem là hydrocarbon có một hay nhiều H được thay bằng halogen. Vị trí của halogen trong cấu tạo quyết định nhiều tính chất.',
        'Đối với alkyl halide thích hợp, bài tập thường dùng NaOH trong nước cho sản phẩm thế và KOH trong ethanol, đun nóng cho sản phẩm tách.'
      ],
      example: 'Viết sản phẩm chính trong sơ đồ CH₃CH₂CH₂Cl + NaOH khi đun trong nước.',
      solution: 'OH thay Cl tại carbon đầu mạch. Phương trình là CH₃CH₂CH₂Cl + NaOH → CH₃CH₂CH₂OH + NaCl, với NaOH trong nước và đun nóng. Sản phẩm hữu cơ là propan-1-ol.',
      questions: [
        ['Tên thay thế của CH₃CH(Cl)CH₂CH₂CH₃ là gì?', ['4-Chloropentane', '1-Chloropentane', '2-Chloropentane'], 2, 'Mạch dài nhất có năm carbon. Đánh số từ đầu gần Cl hơn thì Cl ở carbon số 2.'],
        ['Trong bài tập so sánh 1-bromobutane với NaOH nước và KOH/ethanol, điều kiện nào thường cho alkene?', ['KOH trong ethanol, đun nóng', 'NaOH trong nước, đun nóng', 'Chỉ có nước'], 0, 'KOH trong ethanol và đun nóng là điều kiện ưu tiên tách HX trong mô hình phổ thông. Sản phẩm alkene ở đây là but-1-ene.']
      ]
    }
  ]
};
