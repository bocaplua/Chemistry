const grade10 = {
  details: {
    mol: {
      sections: [
        ["Đổi về mol trước", "Từ khối lượng m và khối lượng mol M, tính n = m/M. Từ số hạt N, tính n = N/Nₐ với Nₐ ≈ 6,022 × 10²³ mol⁻¹. Nếu đề cho thể tích mol khí Vₘ ở điều kiện xác định, dùng n = V/Vₘ với hai thể tích cùng đơn vị."],
        ["Cân bằng bằng bảo toàn nguyên tử", "Giữ nguyên chỉ số trong công thức chất, chỉ thay hệ số đứng trước. Thử bắt đầu từ nguyên tố xuất hiện trong ít chất nhất, rồi đếm lại từng loại nguyên tử ở hai vế. Cuối cùng rút các hệ số nguyên về tỉ lệ đơn giản nhất."],
        ["Đọc hệ số theo tỉ lệ mol", "Trong 2Al + 3Cl₂ → 2AlCl₃, cứ 2 mol Al phản ứng thì cần 3 mol Cl₂ và thu được 2 mol AlCl₃. Hệ số cho tỉ lệ mol. Muốn tìm tỉ lệ khối lượng, cần nhân số mol với khối lượng mol của từng chất."]
      ],
      examples: [
        ["Phân hủy hoàn toàn 25 g CaCO₃ tinh khiết. Tính khối lượng CaO và CO₂, với M(CaCO₃) = 100, M(CaO) = 56 và M(CO₂) = 44 g/mol.", "CaCO₃ → CaO + CO₂ có tỉ lệ 1 : 1 : 1. Từ 25/100 = 0,25 mol CaCO₃, thu được 0,25 mol mỗi sản phẩm. Khối lượng lần lượt là 14 g và 11 g. Hai khối lượng cộng lại đúng bằng 25 g."],
        ["Tính số phân tử trong 9 g H₂O với M(H₂O) = 18 g/mol.", "Đổi 9 g thành 0,50 mol. Mỗi mol có khoảng 6,022 × 10²³ phân tử nên 0,50 mol có 3,011 × 10²³ phân tử. Nếu đếm nguyên tử H thì nhân tiếp với 2."]
      ],
      practice: [
        ["basic", "11 g CO₂ có bao nhiêu mol, biết M(CO₂) = 44 g/mol?", ["0,25 mol", "0,50 mol", "4,0 mol"], 0, "Dùng n = m/M = 11/44 = 0,25 mol."],
        ["basic", "Hệ số Mg, O₂, MgO tối giản trong Mg + O₂ → MgO lần lượt là bao nhiêu?", ["1, 1, 1", "2, 1, 2", "1, 2, 1"], 1, "O₂ có 2 O, nên đặt 2 trước MgO. Khi đó vế phải có 2 Mg, nên đặt 2 trước Mg."],
        ["apply", "Theo CaCO₃ → CaO + CO₂, từ 30 g CaCO₃ thu được bao nhiêu gam CO₂? M(CaCO₃) = 100 và M(CO₂) = 44 g/mol.", ["4,4 g", "10,0 g", "13,2 g"], 2, "n(CaCO₃) = 0,30 mol. Tỉ lệ 1 : 1 cho 0,30 mol CO₂, có khối lượng 0,30 × 44 = 13,2 g."],
        ["apply", "Theo 2CO + O₂ → 2CO₂, 0,80 mol CO cháy hoàn toàn cần bao nhiêu mol O₂?", ["0,40 mol", "0,80 mol", "1,60 mol"], 0, "Hệ số CO : O₂ là 2 : 1, nên n(O₂) = 0,80 × 1/2 = 0,40 mol."],
        ["challenge", "Mẫu 20 g đá chứa 80% CaCO₃ theo khối lượng, phần còn lại không phản ứng. Nung đến khi toàn bộ CaCO₃ phân hủy. Có bao nhiêu gam CO₂? M(CaCO₃) = 100 và M(CO₂) = 44 g/mol.", ["8,80 g", "7,04 g", "3,52 g"], 1, "Mẫu có 20 × 0,80 = 16 g CaCO₃, tức 0,16 mol. Phản ứng CaCO₃ → CaO + CO₂ tạo 0,16 mol CO₂, tương ứng 7,04 g."],
        ["challenge", "10,0 g CaCO₃ tinh khiết được nung. Hiệu suất tạo CO₂ là 75%. Tính khối lượng CO₂ thực tế, biết M(CaCO₃) = 100 và M(CO₂) = 44 g/mol.", ["5,87 g", "4,40 g", "3,30 g"], 2, "Lí thuyết cho 0,10 mol CO₂, tức 4,40 g. Khối lượng thực tế là 4,40 × 0,75 = 3,30 g."]
      ]
    },
    atom: {
      sections: [
        ["Đọc kí hiệu nguyên tử", "Trong kí hiệu của một nguyên tử X, chỉ số dưới bên trái là Z, chỉ số trên bên trái là A. Từ đó p = Z, n = A − Z. Nếu có điện tích ion thì đọc riêng ở phía trên bên phải."],
        ["Đồng vị và khối lượng nguyên tử trung bình", "Các đồng vị của cùng một nguyên tố có cùng Z và khác số neutron. Trong bài tính gần đúng, lấy số khối của mỗi đồng vị nhân với tỉ phần của nó rồi cộng các tích. Chẳng hạn, 25% được đưa vào phép tính dưới dạng 0,25."],
        ["Từ cấu hình electron đến chu kì và nhóm", "Ở trạng thái cơ bản, số lượng tử chính lớn nhất có electron cho biết chu kì. Với nguyên tố nhóm chính, ns¹ và ns² thường lần lượt chỉ nhóm IA và IIA. Mẫu ns²np¹ đến ns²np⁶ tương ứng nhóm IIIA đến VIIIA. He là ngoại lệ cần nhớ, có 1s² và thuộc nhóm VIIIA."],
        ["Dự đoán xu hướng", "Trong cùng một chu kì, bán kính nguyên tử thường giảm dần từ trái sang phải do điện tích hạt nhân tăng trong khi electron thêm vào cùng lớp. Trong cùng một nhóm chính, bán kính thường tăng khi đi xuống vì số lớp electron tăng."]
      ],
      examples: [
        ["Chlorine gồm 75% đồng vị có A = 35 và 25% đồng vị có A = 37. Tính khối lượng nguyên tử trung bình gần đúng.", "Lấy 35 × 0,75 + 37 × 0,25 = 35,5 u. Kết quả nằm giữa 35 u và 37 u, lệch về 35 u vì đồng vị này nhiều hơn."],
        ["Nguyên tử có cấu hình 1s² 2s² 2p⁶ 3s² 3p⁵. Xác định Z, chu kì và nhóm.", "Cộng các số electron được 17, tương ứng Z = 17. Lớp ngoài cùng có n = 3 nên thuộc chu kì 3. Mẫu 3s² 3p⁵ có 7 electron lớp ngoài cùng, chỉ nhóm VIIA (nhóm 17)."]
      ],
      practice: [
        ["basic", "Nguyên tử có Z = 15 và A = 31 có bao nhiêu neutron?", ["15", "16", "31"], 1, "Số neutron bằng A − Z = 31 − 15 = 16."],
        ["basic", "Cặp nào có thể là đồng vị của cùng một nguyên tố?", ["Z = 6, A = 12 và Z = 7, A = 14", "Z = 12, A = 24 và Z = 13, A = 24", "Z = 8, A = 16 và Z = 8, A = 18"], 2, "Hai nguyên tử có cùng Z = 8 và khác số khối, nên là hai đồng vị của oxygen."],
        ["apply", "Ion S²⁻ có Z = 16. Ion có bao nhiêu electron?", ["18", "16", "14"], 0, "Nguyên tử trung hòa có 16 electron. Khi nhận thêm 2 electron, ion S²⁻ có 18 electron."],
        ["apply", "Nguyên tử có cấu hình 1s² 2s² 2p⁶ 3s². Vì sao nó thuộc chu kì 3?", ["Vì chứa đúng 3 electron", "Vì lớp electron ngoài cùng có n = 3", "Vì có 3 phân lớp p"], 1, "Số lượng tử chính lớn nhất có electron là 3, ứng với phân lớp 3s."],
        ["challenge", "Nguyên tố X có hai đồng vị với A = 10 và A = 11. Khối lượng nguyên tử trung bình gần đúng là 10,8 u. Tỉ lệ đồng vị A = 11 là bao nhiêu?", ["20%", "50%", "80%"], 2, "Đặt x là tỉ phần đồng vị A = 11. Ta có 10(1 − x) + 11x = 10,8, nên x = 0,80."],
        ["challenge", "Ba nguyên tử Na, Mg, Al đều ở chu kì 3. Theo xu hướng chung, thứ tự bán kính giảm dần là gì?", ["Na > Mg > Al", "Al > Mg > Na", "Mg > Na > Al"], 0, "Từ Na sang Al, điện tích hạt nhân tăng trong khi electron được điền vào cùng lớp thứ ba. Bán kính thường giảm theo chiều đó."]
      ]
    },
    bond: {
      sections: [
        ["Đếm electron hóa trị để vẽ Lewis", "Cộng electron hóa trị của các nguyên tử. Nếu vẽ ion âm thì cộng thêm theo điện tích, nếu vẽ ion dương thì trừ đi. Vẽ khung liên kết, phân bổ cặp electron còn lại và kiểm tra số electron đã dùng. H thường đạt 2 electron, còn C, N và O trong các ví dụ đơn giản thường đạt 8."],
        ["Đọc liên kết đơn, đôi, ba", "Một cặp electron dùng chung tạo liên kết đơn, hai cặp tạo liên kết đôi và ba cặp tạo liên kết ba. Chẳng hạn, O=C=O có hai liên kết đôi. Các cặp electron không tham gia liên kết vẫn được vẽ ở các nguyên tử trong công thức Lewis."],
        ["Xét tính phân cực của cả phân tử", "Hãy xem từng liên kết có phân cực không rồi xét hình dạng phân tử. Trong CO₂ thẳng, hai moment liên kết C=O ngược chiều và triệt tiêu nhau. H₂O có dạng gấp khúc nên hai moment O–H không triệt tiêu."],
        ["Phân biệt lực giữa các phân tử", "Liên kết hydrogen có thể hình thành khi H liên kết với N, O hoặc F và tương tác với cặp electron tự do thích hợp. Lực London có mặt giữa mọi nguyên tử và phân tử. Cả hai là tương tác có thể giúp giải thích nhiệt độ sôi."]
      ],
      examples: [
        ["Vẽ công thức Lewis của NH₃ và đếm cặp electron tự do trên N.", "N góp 5 electron và ba H góp 3, tổng là 8. Ba liên kết đơn N–H dùng 6 electron. Hai electron còn lại tạo một cặp tự do trên N, nên N có đủ 8 electron và mỗi H có 2."],
        ["Giải thích vì sao H₂O phân cực còn CO₂ có moment lưỡng cực bằng 0.", "Cả O–H và C=O đều phân cực. Ở H₂O, hai moment hướng theo hai nhánh gấp khúc, nên hợp lại thành moment khác 0. Ở CO₂, hai moment đối xứng trên đường thẳng, nên tổng bằng 0."]
      ],
      practice: [
        ["basic", "Một liên kết đôi chứa bao nhiêu cặp electron dùng chung?", ["1 cặp", "3 cặp", "2 cặp"], 2, "Mỗi gạch trong kí hiệu liên kết biểu thị một cặp electron dùng chung. Liên kết đôi có hai gạch."],
        ["basic", "Tương tác đặc trưng có thể xảy ra giữa hai phân tử H₂O là gì?", ["Liên kết hydrogen giữa các phân tử", "Liên kết kim loại", "Liên kết ion trong mạng tinh thể"], 0, "H gắn với O của một phân tử có thể tương tác với cặp electron tự do trên O của phân tử khác."],
        ["apply", "Trong công thức Lewis của H₂O, O có mấy cặp electron tự do?", ["1", "2", "3"], 1, "Tổng cộng có 8 electron hóa trị. Hai liên kết O–H dùng 4 electron, nên O còn 4 electron, tức hai cặp tự do."],
        ["apply", "Vì sao CO₂ không phân cực dù liên kết C=O phân cực?", ["C và O có độ âm điện giống hệt nhau", "Phân tử có dạng gấp khúc", "Phân tử thẳng và hai moment liên kết triệt tiêu nhau"], 2, "CO₂ có cấu trúc đối xứng O=C=O. Hai moment C=O có cùng độ lớn và ngược hướng."],
        ["challenge", "Công thức Lewis đơn giản của N₂ có liên kết N≡N. Tổng số cặp electron tự do trên cả hai N là bao nhiêu?", ["2", "1", "3"], 0, "Hai N góp 10 electron hóa trị. Liên kết ba dùng 6 electron. Còn 4 electron, tức 2 cặp, mỗi N giữ một cặp."],
        ["challenge", "Trong điều kiện áp suất như nhau, NH₃ sôi ở nhiệt độ cao hơn PH₃ dù phân tử NH₃ nhẹ hơn. Lời giải thích phù hợp nhất là gì?", ["PH₃ tạo mạng ion", "Giữa các phân tử NH₃ có thể hình thành liên kết hydrogen", "Khi sôi, NH₃ phải bẻ gãy mọi liên kết N–H"], 1, "Tương tác hydrogen giữa các phân tử NH₃ làm cần nhiều năng lượng hơn để tách chúng. Khi sôi, các liên kết N–H bên trong phân tử vẫn được giữ."]
      ]
    },
    redox: {
      sections: [
        ["Áp dụng thứ tự ưu tiên khi tìm số oxi hóa", "Trong đơn chất, số oxi hóa bằng 0. Với ion đơn nguyên tử, số oxi hóa bằng điện tích. Trong hợp chất, O thường là −2 nhưng là −1 trong peroxide như H₂O₂. H thường là +1 nhưng là −1 trong hydride kim loại như NaH."],
        ["Nhận diện hai quá trình", "Số oxi hóa tăng là quá trình oxi hóa, do mất electron theo cách ghi sổ electron. Số oxi hóa giảm là quá trình khử, do nhận electron. Chất khử bị oxi hóa, còn chất oxi hóa bị khử."],
        ["Lập tỉ lệ electron", "Viết lượng electron nhường và nhận trên mỗi nguyên tử hoặc ion. Nhân các quá trình để số electron bằng nhau, rồi điền hệ số vào phương trình. Kiểm tra đồng thời số nguyên tử và điện tích nếu đang viết phương trình ion."],
        ["Phân biệt với phản ứng trao đổi ion", "Xét số oxi hóa trước và sau phản ứng. Trong HCl + NaOH → NaCl + H₂O, mọi nguyên tố giữ nguyên số oxi hóa. Phản ứng này là trung hòa acid–base."]
      ],
      examples: [
        ["Cân bằng Fe²⁺ + MnO₄⁻ + H⁺ → Fe³⁺ + Mn²⁺ + H₂O trong môi trường acid.", "Mỗi Fe²⁺ nhường 1e⁻. Mn từ +7 về +2 nhận 5e⁻, nên cần 5Fe²⁺ cho 1MnO₄⁻. Cân bằng O bằng 4H₂O, rồi thêm 8H⁺ ở vế trái. Phương trình là 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Hai vế có tổng điện tích +17."],
        ["Trong 2Mg + O₂ → 2MgO, xác định chất khử, chất oxi hóa và tổng electron trao đổi theo phương trình.", "Mỗi Mg tăng số oxi hóa từ 0 đến +2, nhường 2e⁻. O trong O₂ giảm từ 0 xuống −2, mỗi nguyên tử nhận 2e⁻. Hai Mg nhường tổng 4e⁻, bằng lượng O₂ nhận. Mg là chất khử và O₂ là chất oxi hóa."]
      ],
      practice: [
        ["basic", "Số oxi hóa của Cl trong ion Cl⁻ là bao nhiêu?", ["−1", "0", "+1"], 0, "Cl⁻ là ion đơn nguyên tử, nên số oxi hóa bằng điện tích −1."],
        ["basic", "Trong Cu²⁺ + 2e⁻ → Cu, quá trình diễn ra là gì?", ["Oxi hóa", "Khử", "Trao đổi proton"], 1, "Cu²⁺ nhận electron và số oxi hóa của Cu giảm từ +2 xuống 0."],
        ["apply", "Số oxi hóa của N trong NO₃⁻ là bao nhiêu?", ["+3", "−3", "+5"], 2, "Gọi x là số oxi hóa của N. Ta có x + 3(−2) = −1, nên x = +5."],
        ["apply", "Phản ứng nào là oxi hóa – khử?", ["Mg + 2HCl → MgCl₂ + H₂", "HCl + NaOH → NaCl + H₂O", "Ag⁺ + Cl⁻ → AgCl"], 0, "Mg tăng từ 0 lên +2 và H giảm từ +1 xuống 0. Hai phương trình còn lại không có nguyên tố thay đổi số oxi hóa."],
        ["challenge", "Theo Cr₂O₇²⁻ → 2Cr³⁺ trong môi trường acid, mỗi ion Cr₂O₇²⁻ nhận bao nhiêu electron?", ["3", "6", "12"], 1, "Mỗi Cr ban đầu có số oxi hóa +6 và giảm về +3, nhận 3 electron. Hai nguyên tử Cr nhận tổng 6 electron."],
        ["challenge", "Trong 2H₂O₂ → 2H₂O + O₂, oxygen trong H₂O₂ biến đổi ra sao?", ["Tất cả O về −2", "Tất cả O về 0", "Một phần O về −2, phần còn lại lên 0"], 2, "O trong peroxide có số oxi hóa −1. Khi tạo H₂O, O giảm xuống −2. Khi tạo O₂, O tăng lên 0. H₂O₂ vừa nhận vừa nhường electron trong phản ứng tự oxi hóa – khử."]
      ]
    },
    energy: {
      sections: [
        ["Đọc ΔH gắn với phương trình", "Giá trị ΔH ứng với lượng chất theo đúng các hệ số đang viết. Nếu phương trình giải phóng 120 kJ khi phản ứng theo hệ số và đề chỉ dùng một nửa lượng chất tương ứng, nhiệt giải phóng cũng giảm một nửa."],
        ["Vận dụng định luật Hess", "Có thể cộng các phương trình để được phương trình cần tìm rồi cộng các ΔH tương ứng. Khi đảo một phương trình, đảo dấu ΔH. Khi nhân hệ số với một số, nhân ΔH với cùng số đó."],
        ["Tính ΔH bằng năng lượng liên kết", "Với các chất ở pha khí, dùng gần đúng ΔH = tổng năng lượng liên kết bị phá vỡ − tổng năng lượng liên kết được hình thành. Đếm liên kết theo hệ số và rút gọn những liên kết giống nhau ở hai vế. Nếu ΔH = −100 kJ, phương trình giải phóng 100 kJ."],
        ["Tính ΔH từ enthalpy tạo thành chuẩn", "Tính tổng ΔfH° của sản phẩm trừ tổng ΔfH° của chất phản ứng, mỗi số hạng nhân hệ số tương ứng. Đơn chất ở trạng thái chuẩn có ΔfH° = 0. Đọc đúng trạng thái H₂O(l) hay H₂O(g), vì hai giá trị khác nhau. Muốn từ kJ/mol sang kJ/g, chia cho khối lượng mol của chất được dùng làm mốc."],
        ["Tính tốc độ trung bình", "Khi theo dõi sự mất đi của A, dùng (nồng độ đầu − nồng độ cuối)/thời gian để thu giá trị dương. Nếu muốn tính tốc độ phản ứng theo phương trình tổng quát, cần chia tốc độ biến thiên nồng độ của chất cho hệ số tương ứng."],
        ["Giải thích yếu tố ảnh hưởng tốc độ", "Nồng độ lớn hơn có thể làm tăng tần suất va chạm. Nhiệt độ cao hơn thường làm tăng tỉ lệ va chạm đủ năng lượng. Chia nhỏ chất rắn có thể tăng diện tích tiếp xúc. Chất xúc tác tạo đường phản ứng có năng lượng hoạt hóa thấp hơn."]
      ],
      examples: [
        ["Cho C(graphite) + O₂ → CO₂ có ΔH = −393,5 kJ và CO + ½O₂ → CO₂ có ΔH = −283,0 kJ. Tính ΔH của C(graphite) + ½O₂ → CO.", "Đảo phương trình thứ hai để được CO₂ → CO + ½O₂ với ΔH = +283,0 kJ. Cộng với phương trình thứ nhất và rút gọn CO₂, ½O₂. Vậy ΔH = −393,5 + 283,0 = −110,5 kJ."],
        ["Ước tính ΔH của H₂(g) + Cl₂(g) → 2HCl(g), biết năng lượng liên kết H–H, Cl–Cl và H–Cl lần lượt là 436, 243 và 427 kJ/mol.", "Phá vỡ một H–H và một Cl–Cl cần 436 + 243 = 679 kJ. Tạo hai H–Cl giải phóng 2 × 427 = 854 kJ. Vậy ΔH ≈ 679 − 854 = −175 kJ theo phương trình, tức tỏa khoảng 175 kJ."],
        ["Trong phản ứng 2A → B, [A] giảm từ 0,80 xuống 0,50 mol/L trong 30 s. Tính tốc độ giảm [A] và tốc độ phản ứng trung bình.", "Tốc độ giảm [A] = (0,80 − 0,50)/30 = 0,010 mol/(L·s). Vì hệ số của A là 2, tốc độ phản ứng trung bình là 0,010/2 = 0,0050 mol/(L·s)."]
      ],
      practice: [
        ["basic", "Phản ứng có ΔH = +35 kJ theo phương trình là phản ứng gì?", ["Tỏa nhiệt", "Thu nhiệt", "Luôn tự diễn ra"], 1, "ΔH dương nghĩa là enthalpy của sản phẩm lớn hơn của chất phản ứng. Ở áp suất không đổi, hệ hấp thụ nhiệt."],
        ["basic", "Yếu tố nào tăng khi đập nhỏ một lượng chất rắn có cùng khối lượng?", ["Số mol", "Khối lượng mol", "Tổng diện tích bề mặt hở"], 2, "Chia nhỏ tạo thêm bề mặt có thể tiếp xúc với chất phản ứng khác."],
        ["apply", "Nếu A → B có ΔH = −42 kJ, 2B → 2A có ΔH bằng bao nhiêu?", ["+84 kJ", "−84 kJ", "+21 kJ"], 0, "Đảo chiều làm ΔH thành +42 kJ. Nhân đôi cả phương trình làm ΔH thành +84 kJ."],
        ["apply", "[B] tăng từ 0,10 đến 0,28 mol/L trong 60 s. Tốc độ tạo B trung bình là bao nhiêu?", ["0,018 mol/(L·s)", "0,0030 mol/(L·s)", "0,0047 mol/(L·s)"], 1, "Tính độ tăng nồng độ rồi chia thời gian: (0,28 − 0,10)/60 = 0,0030 mol/(L·s)."],
        ["challenge", "Cho A → B có ΔH = −80 kJ và C → B có ΔH = −30 kJ. Tính ΔH của A → C.", ["−110 kJ", "+50 kJ", "−50 kJ"], 2, "Đảo C → B thành B → C có ΔH = +30 kJ rồi cộng với A → B. Kết quả là −80 + 30 = −50 kJ."],
        ["challenge", "Trong 2A + B → C, [A] giảm 0,12 mol/L sau 20 s ở thể tích không đổi. Tốc độ tạo C trung bình là bao nhiêu?", ["0,0030 mol/(L·s)", "0,0060 mol/(L·s)", "0,0120 mol/(L·s)"], 0, "Cứ giảm 2 mol A thì tạo 1 mol C. Vậy [C] tăng 0,12/2 = 0,060 mol/L, ứng với 0,060/20 = 0,0030 mol/(L·s)."]
      ]
    },
    halogen: {
      sections: [
        ["Vị trí và electron hóa trị", "Halogen thuộc nhóm VIIA (nhóm 17), có cấu hình electron lớp ngoài cùng dạng ns²np⁵. Trong các muối halide thông thường, mỗi nguyên tử halogen đã nhận thêm một electron để tạo ion X⁻."],
        ["Dùng xu hướng để dự đoán phản ứng thế", "Khi so sánh Cl₂, Br₂ và I₂ trong các bài dung dịch, chất có tính oxi hóa mạnh hơn có thể nhận electron từ ion halide của nguyên tố đứng sau. Cl₂ có thể oxi hóa Br⁻ và I⁻. Br₂ có thể oxi hóa I⁻."],
        ["Phân biệt nguyên tố, đơn chất và ion", "Cl₂ và Cl⁻ có tính chất khác nhau. Chlorine trong Cl₂ có số oxi hóa 0 và có thể nhận electron. Chloride trong NaCl chứa Cl ở số oxi hóa −1."],
        ["So sánh trạng thái ở nhiệt độ phòng", "Ở khoảng 25 °C và áp suất thường, F₂ và Cl₂ là khí, Br₂ là chất lỏng, I₂ là chất rắn. Khi đi từ F₂ đến I₂, mây electron thường dễ biến dạng hơn, làm lực London giữa các phân tử mạnh lên."]
      ],
      examples: [
        ["Dự đoán Br₂ có phản ứng thế với dung dịch KI hay KCl không. Viết phương trình ion nếu có.", "Br₂ oxi hóa được I⁻: Br₂ + 2I⁻ → 2Br⁻ + I₂. Với Cl⁻, chiều oxi hóa này không thuận lợi trong bài tập thế halogen vì Br₂ yếu hơn Cl₂."],
        ["Theo Br₂ + 2I⁻ → 2Br⁻ + I₂, 0,10 mol Br₂ phản ứng hết với I⁻ dư. Tìm số mol I⁻ đã phản ứng và I₂ tạo thành.", "Theo hệ số, 1 mol Br₂ cần 2 mol I⁻ và tạo 1 mol I₂. Vậy có 0,20 mol I⁻ phản ứng và thu 0,10 mol I₂."]
      ],
      practice: [
        ["basic", "Các nguyên tử halogen có bao nhiêu electron lớp ngoài cùng?", ["6", "8", "7"], 2, "Cấu hình lớp ngoài cùng ns²np⁵ có 2 + 5 = 7 electron."],
        ["basic", "Chất nào là halogen ở trạng thái lỏng khoảng 25 °C và áp suất thường?", ["Br₂", "Cl₂", "I₂"], 0, "Ở những điều kiện đó Br₂ là chất lỏng, Cl₂ là khí và I₂ là chất rắn."],
        ["apply", "Phương trình ion nào mô tả Br₂ oxi hóa I⁻?", ["Br₂ + I⁻ → Br⁻ + I₂", "Br₂ + 2I⁻ → 2Br⁻ + I₂", "I₂ + 2Br⁻ → 2I⁻ + Br₂"], 1, "Br₂ nhận 2e⁻ từ hai ion I⁻. Phương trình cân bằng cả số nguyên tử và điện tích."],
        ["apply", "Trong dung dịch, ion nào dưới đây có thể bị Cl₂ oxi hóa theo phản ứng thế halogen?", ["F⁻", "Cl⁻", "Br⁻"], 2, "Cl₂ có tính oxi hóa mạnh hơn Br₂, nên có thể chuyển Br⁻ thành Br₂."],
        ["challenge", "Theo Cl₂ + 2I⁻ → 2Cl⁻ + I₂, có 0,30 mol Cl₂ và đúng 0,40 mol I⁻. Khi phản ứng diễn ra hoàn toàn theo phương trình, thu được tối đa bao nhiêu mol I₂?", ["0,20 mol", "0,30 mol", "0,40 mol"], 0, "0,40 mol I⁻ chỉ cần 0,20 mol Cl₂. I⁻ hết trước và tạo 0,40/2 = 0,20 mol I₂."],
        ["challenge", "Trong các đơn chất Cl₂, Br₂ và I₂, đơn chất nào có nhiệt độ sôi cao nhất ở cùng áp suất?", ["Cl₂", "I₂", "Br₂"], 1, "Phân tử I₂ có mây electron lớn và dễ phân cực nhất trong nhóm này, nên lực London mạnh nhất và nhiệt độ sôi cao nhất."]
      ]
    },
    limiting: {
      sections: [
        ["Tìm chất hết trước", "Cân bằng phương trình, đổi lượng mỗi chất phản ứng sang mol rồi lấy số mol chia cho hệ số của chất đó. Giá trị nhỏ nhất cho biết chất giới hạn. Nếu tất cả các giá trị bằng nhau, các chất vừa đủ theo phương trình."],
        ["Tính số mol còn lại", "Lấy giá trị nhỏ nhất tìm được nhân với hệ số của chất đang xét để có số mol đã phản ứng. Số mol còn lại bằng số mol ban đầu trừ số mol đã phản ứng. Dùng tỉ lệ này cho quá trình diễn ra hoàn toàn theo một phương trình."],
        ["Xử lí hiệu suất", "Tính lượng sản phẩm lí thuyết từ chất giới hạn, rồi áp dụng H = lượng thực tế/lượng lí thuyết × 100%. Tử và mẫu phải đo bằng cùng đơn vị. Nếu đã biết H và lượng lí thuyết, nhân với H/100 để ra lượng thực tế."],
        ["Đọc dữ kiện về độ tinh khiết", "Nếu chỉ một thành phần trong mẫu tham gia phản ứng, nhân khối lượng toàn mẫu với tỉ phần khối lượng của thành phần đó rồi mới đổi ra mol. Độ tinh khiết áp dụng cho nguyên liệu. Hiệu suất áp dụng cho lượng sản phẩm."]
      ],
      examples: [
        ["Trong CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂, có 0,30 mol CaCO₃ và 0,40 mol HCl. Giả sử phản ứng hoàn toàn theo phương trình. Tìm lượng CaCO₃ còn lại và CO₂ tạo ra.", "So sánh 0,30/1 với 0,40/2. HCl giới hạn ở mức 0,20 mol theo phương trình, nên tiêu thụ 0,20 mol CaCO₃ và tạo 0,20 mol CO₂. Còn 0,10 mol CaCO₃."],
        ["Theo 2Mg + O₂ → 2MgO, lượng MgO lí thuyết là 0,20 mol. Thực tế thu 6,0 g MgO với M = 40 g/mol. Tính hiệu suất.", "Lượng lí thuyết theo khối lượng là 0,20 × 40 = 8,0 g. Hiệu suất H = 6,0/8,0 × 100% = 75%."]
      ],
      practice: [
        ["basic", "Theo N₂ + 3H₂ → 2NH₃, 0,20 mol N₂ cần bao nhiêu mol H₂ để phản ứng hết?", ["0,20 mol", "0,60 mol", "0,067 mol"], 1, "Hệ số N₂ : H₂ là 1 : 3, nên cần 0,20 × 3 = 0,60 mol H₂."],
        ["basic", "Nếu lấy 1 mol N₂ và 3 mol H₂ theo N₂ + 3H₂ → 2NH₃, các chất có tỉ lệ thế nào?", ["N₂ dư", "H₂ dư", "Vừa đủ"], 2, "Hai giá trị n/hệ số là 1/1 và 3/3, cùng bằng 1. Hỗn hợp có đúng tỉ lệ phản ứng."],
        ["apply", "Theo 2Na + Cl₂ → 2NaCl, cho 0,40 mol Na và 0,10 mol Cl₂. Tối đa tạo được bao nhiêu mol NaCl?", ["0,20 mol", "0,40 mol", "0,10 mol"], 0, "0,10 mol Cl₂ chỉ cần 0,20 mol Na, nên Cl₂ giới hạn. Theo tỉ lệ 1 : 2, nó tạo được 0,20 mol NaCl."],
        ["apply", "Có 0,25 mol Ag⁺ và 0,15 mol Cl⁻. Theo Ag⁺ + Cl⁻ → AgCl, khi tạo kết tủa hoàn toàn theo phương trình, còn dư bao nhiêu mol Ag⁺?", ["0,15 mol", "0,10 mol", "0,25 mol"], 1, "Hai ion phản ứng theo tỉ lệ 1 : 1. Hết 0,15 mol Cl⁻ thì có 0,15 mol Ag⁺ đã phản ứng, còn 0,25 − 0,15 = 0,10 mol Ag⁺."],
        ["challenge", "Theo 2Ca + O₂ → 2CaO, có 0,30 mol Ca và 0,20 mol O₂. Nếu hiệu suất thu CaO là 80%, thu được bao nhiêu gam CaO (M = 56 g/mol)?", ["16,80 g", "17,92 g", "13,44 g"], 2, "So sánh 0,30/2 = 0,15 và 0,20/1 = 0,20. Ca giới hạn, cho 0,30 mol CaO theo lí thuyết. Khối lượng thực tế là 0,30 × 56 × 0,80 = 13,44 g."],
        ["challenge", "Mẫu 25,0 g chứa 80% CaCO₃. Cho mẫu phản ứng với HCl dư, phần tạp chất không sinh CO₂. Hiệu suất thu CO₂ là 90%. Tính số mol CO₂ thu được, biết M(CaCO₃) = 100 g/mol.", ["0,180 mol", "0,225 mol", "0,200 mol"], 0, "Khối lượng CaCO₃ là 25,0 × 0,80 = 20,0 g, tức 0,200 mol. Lượng CO₂ lí thuyết bằng 0,200 mol theo tỉ lệ 1 : 1. Thực tế thu 0,200 × 0,90 = 0,180 mol."]
      ]
    },
    concentration: {
      sections: [
        ["Phần trăm khối lượng", "Dùng C% = m chất tan/m dung dịch × 100%. Dung dịch gồm chất tan và dung môi. Ví dụ, 10 g muối hòa tan hết trong 90 g nước tạo 100 g dung dịch có C% = 10%."],
        ["Nồng độ mol", "Nồng độ mol C = n/V, với n là số mol chất tan và V là thể tích dung dịch tính bằng lít. Kí hiệu 0,50 M có nghĩa là mỗi lít dung dịch chứa 0,50 mol chất tan. Khi đề cho mL, chia cho 1000 để đổi sang L."],
        ["Bảo toàn chất tan khi pha loãng", "Nếu chỉ thêm dung môi, số mol chất tan giữ nguyên. Do đó C₁V₁ = C₂V₂, với V₁ và V₂ cùng đơn vị. Trong đó V₂ là thể tích cuối của dung dịch."],
        ["Trộn hai dung dịch cùng chất tan", "Tính số mol chất tan từ từng phần rồi cộng. Chia tổng số mol cho thể tích của dung dịch sau khi trộn. Chỉ lấy V₁ + V₂ khi bài cho phép coi thể tích cộng được hoặc yêu cầu dùng giả thiết đó."]
      ],
      examples: [
        ["Một dung dịch chứa 5,85 g NaCl trong thể tích 500 mL. Tính nồng độ mol. M(NaCl) = 58,5 g/mol.", "Số mol NaCl là 5,85/58,5 = 0,100 mol. Thể tích dung dịch là 0,500 L. Nồng độ C = 0,100/0,500 = 0,200 mol/L."],
        ["Hai dung dịch NaCl có thể tích và nồng độ lần lượt là 100 mL ở 0,50 M và 200 mL ở 0,10 M. Giả sử thể tích cộng được. Tìm nồng độ sau khi trộn.", "Hai phần lần lượt có 0,50 × 0,100 = 0,050 mol và 0,10 × 0,200 = 0,020 mol. Tổng là 0,070 mol trong 0,300 L, cho nồng độ xấp xỉ 0,233 M."]
      ],
      practice: [
        ["basic", "Dung dịch 200 g chứa 10 g NaCl. Nồng độ phần trăm khối lượng là bao nhiêu?", ["20%", "10%", "5%"], 2, "C% = (10/200) × 100% = 5%."],
        ["basic", "250 mL bằng bao nhiêu lít?", ["0,250 L", "2,50 L", "0,025 L"], 0, "Đổi mL sang L bằng cách chia cho 1000."],
        ["apply", "Trong 100 mL dung dịch NaCl 0,40 M có bao nhiêu mol NaCl?", ["0,40 mol", "0,040 mol", "4,0 mol"], 1, "Đổi 100 mL = 0,100 L, rồi tính n = CV = 0,40 × 0,100 = 0,040 mol."],
        ["apply", "Nếu thể tích 50 mL dung dịch 0,60 M tăng lên đúng 150 mL do pha loãng với nước, nồng độ mới là bao nhiêu?", ["1,80 M", "0,40 M", "0,20 M"], 2, "Số mol chất tan giữ nguyên, nên C₂ = C₁V₁/V₂ = 0,60 × 50/150 = 0,20 M."],
        ["challenge", "Trộn 200 mL dung dịch NaCl 0,20 M với 300 mL dung dịch NaCl 0,40 M. Giả sử thể tích cộng được. Nồng độ cuối là bao nhiêu?", ["0,32 M", "0,30 M", "0,60 M"], 0, "Tổng số mol là 0,200 × 0,20 + 0,300 × 0,40 = 0,160 mol. Chia cho 0,500 L được 0,32 M."],
        ["challenge", "Một dung dịch NaCl có nồng độ 5,85% theo khối lượng và khối lượng riêng 1,04 g/mL. Biết M(NaCl) = 58,5 g/mol. Nồng độ mol là bao nhiêu?", ["0,104 M", "1,04 M", "0,962 M"], 1, "1 L dung dịch nặng 1040 g và chứa 1040 × 0,0585 = 60,84 g NaCl. Đó là 60,84/58,5 = 1,04 mol trong 1 L."]
      ]
    }
  },
  extra: [
    {
      id: "limiting",
      grade: 10,
      title: "Chất giới hạn, chất dư và hiệu suất",
      summary: "Tìm chất hết trước và tính lượng sản phẩm thực tế.",
      theory: [
        "Khi hai chất phản ứng có lượng bất kì, so sánh số mol chia cho hệ số phương trình của mỗi chất. Chất cho giá trị nhỏ nhất giới hạn lượng sản phẩm tối đa có thể tạo thành.",
        "Tính lượng sản phẩm lí thuyết theo phương trình. Để tính lượng thực tế khi đã biết hiệu suất, nhân lượng lí thuyết với tỉ phần hiệu suất."
      ],
      example: "Theo 2H₂ + O₂ → 2H₂O, hỗn hợp có 0,30 mol H₂ và 0,20 mol O₂. Chất nào hết trước nếu phản ứng xảy ra hoàn toàn?",
      solution: "So sánh 0,30/2 = 0,15 với 0,20/1 = 0,20. H₂ có giá trị nhỏ hơn nên giới hạn phản ứng. Chỉ có 0,15 mol O₂ phản ứng và còn dư 0,05 mol O₂.",
      questions: [
        ["Phản ứng A + 2B → C có 0,20 mol A và 0,30 mol B. Chất giới hạn là gì?", ["B", "A", "Hai chất vừa đủ"], 0, "So sánh 0,20/1 với 0,30/2 = 0,15. B có giá trị nhỏ hơn và hết trước."],
        ["Khối lượng lí thuyết là 12 g và thực tế thu được 9 g. Hiệu suất là bao nhiêu?", ["33%", "75%", "133%"], 1, "H = (9/12) × 100% = 75%."]
      ]
    },
    {
      id: "concentration",
      grade: 10,
      title: "Nồng độ dung dịch và pha loãng",
      summary: "Tính lượng chất tan từ nồng độ và thể tích.",
      theory: [
        "Nồng độ mol là số mol chất tan trên một lít dung dịch, còn nồng độ phần trăm khối lượng là phần trăm khối lượng chất tan trong toàn bộ dung dịch.",
        "Thêm dung môi làm tăng thể tích nhưng giữ nguyên số mol chất tan. Dùng C₁V₁ = C₂V₂ để liên hệ nồng độ và thể tích trước, sau khi pha loãng."
      ],
      example: "Dung dịch chứa 0,15 mol NaCl trong thể tích 300 mL. Tính nồng độ mol.",
      solution: "300 mL = 0,300 L. Nồng độ mol là 0,15/0,300 = 0,50 mol/L.",
      questions: [
        ["100 mL dung dịch 0,20 M chứa bao nhiêu mol chất tan?", ["0,0020 mol", "0,020 mol", "0,20 mol"], 1, "Đổi 100 mL thành 0,100 L rồi dùng n = CV = 0,20 × 0,100 = 0,020 mol."],
        ["Pha loãng 50 mL dung dịch 1,0 M thành đúng 200 mL. Nồng độ dung dịch mới là bao nhiêu?", ["0,05 M", "4,0 M", "0,25 M"], 2, "Thay vào hệ thức C₁V₁ = C₂V₂: C₂ = 1,0 × 50/200 = 0,25 M."]
      ]
    }
  ]
};
