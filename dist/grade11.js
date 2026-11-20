const grade11 = {
  details: {
    alcohol: {
      sections: [
        ["Nhìn nguyên tử ngay cạnh –OH", "Trong CH₃CH₂OH, nhóm –OH nối với carbon no của –CH₂– nên đây là alcohol. Trong C₆H₅OH, nhóm –OH nối trực tiếp với carbon của vòng thơm nên đây là phenol. C₆H₅CH₂OH vẫn là alcohol vì giữa vòng và –OH có –CH₂–."],
        ["Xác định bậc của alcohol", "Tìm carbon mang –OH rồi đếm bao nhiêu carbon nối trực tiếp với nó. Nối với một, hai hoặc ba carbon tương ứng alcohol bậc một, hai hoặc ba. Carbon mang –OH trong CH₃CH(OH)CH₃ nối với hai nhóm CH₃ nên đây là alcohol bậc hai."],
        ["Lần theo sản phẩm oxi hóa", "Trong sơ đồ oxi hóa nhẹ thường gặp ở bậc phổ thông, alcohol bậc một có dạng RCH₂OH chuyển thành aldehyde RCHO. Alcohol bậc hai dạng RCH(OH)R′ chuyển thành ketone RCOR′. Alcohol bậc ba thiếu H trên carbon mang –OH nên không chuyển theo hai sơ đồ đó trong cùng điều kiện."],
        ["Dùng NaOH để phân biệt", "Phenol có tính acid đủ mạnh để phản ứng với NaOH trong nước, tạo sodium phenoxide và nước. Ethanol và các alcohol thông thường không phản ứng đáng kể với NaOH trong dung dịch nước. Phenol là acid yếu hơn carboxylic acid thông thường."],
        ["Kết nối sang Hóa 12", "Khi học ester, Dế sẽ gặp lại –OH của alcohol. Trong phản ứng giữa carboxylic acid và alcohol, có thể lần theo sản phẩm bằng cách viết phần RCOO– từ acid, rồi nối với gốc R′ của alcohol thành RCOOR′."]
      ],
      examples: [
        ["Propan-1-ol và propan-2-ol bị oxi hóa nhẹ theo sơ đồ phổ thông. Viết sản phẩm hữu cơ tương ứng.", "Bước 1. Viết cấu tạo CH₃CH₂CH₂OH và CH₃CH(OH)CH₃. Bước 2. Carbon mang –OH trong chất thứ nhất nối với một carbon, còn chất thứ hai nối với hai carbon. Bước 3. Bậc một cho aldehyde CH₃CH₂CHO (propanal), bậc hai cho ketone CH₃COCH₃ (propanone)."],
        ["Một hỗn hợp có 0,08 mol phenol và 0,12 mol ethanol. Tính lượng NaOH phản ứng khi thêm dung dịch NaOH dư vào hỗn hợp.", "Trong nước, phenol phản ứng theo C₆H₅OH + NaOH → C₆H₅ONa + H₂O. Ethanol không tiêu thụ lượng NaOH đáng kể. Tỉ lệ phenol : NaOH là 1 : 1 nên 0,08 mol NaOH đã phản ứng, tương ứng 0,08 × 40 = 3,20 g."]
      ],
      practice: [
        ["basic","Butan-2-ol, CH₃CH(OH)CH₂CH₃, là alcohol bậc mấy?",["Bậc một","Bậc hai","Bậc ba"],1,"Carbon mang –OH nối trực tiếp với một nhóm CH₃ và một nhóm CH₂CH₃, tổng cộng hai carbon."],
        ["basic","Chất nào phản ứng với NaOH trong dung dịch nước?",["Propan-1-ol","Ethanol","Phenol"],2,"Phenol cho proton và tạo sodium phenoxide. Ethanol và propan-1-ol không phản ứng đáng kể với NaOH trong nước."],
        ["apply","Oxi hóa nhẹ CH₃CH₂CH₂CH₂OH theo sơ đồ phổ thông cho sản phẩm nào?",["CH₃CH₂CH₂CHO","CH₃CH₂COCH₃","CH₃CH₂CH₂COOH"],0,"Carbon mang –OH nằm ở đầu mạch nên đây là alcohol bậc một. Oxi hóa nhẹ theo sơ đồ dừng ở aldehyde butanal."],
        ["apply","Oxi hóa nhẹ 0,20 mol propan-2-ol với hiệu suất 75%. Thu được bao nhiêu mol propanone?",["0,20 mol","0,15 mol","0,075 mol"],1,"Mỗi mol alcohol bậc hai cho tối đa một mol ketone. Lượng thực tế là 0,20 × 75% = 0,15 mol."],
        ["challenge","Hỗn hợp chỉ có phenol và ethanol. Dung dịch NaOH dư đã tiêu thụ 4,00 g NaOH. Khối lượng phenol trong mẫu bằng bao nhiêu? Cho M(NaOH) = 40 và M(phenol) = 94 g/mol.",["4,00 g","18,8 g","9,40 g"],2,"NaOH chỉ phản ứng đáng kể với phenol. Có 4,00/40 = 0,100 mol NaOH, tương ứng 0,100 mol phenol. Khối lượng phenol là 0,100 × 94 = 9,40 g."],
        ["challenge","Trong các alcohol đơn chức mạch hở có công thức C₄H₁₀O, chất nào oxi hóa nhẹ cho ketone?",["Butan-2-ol","2-Methylpropan-1-ol","2-Methylpropan-2-ol"],0,"Butan-2-ol là alcohol bậc hai và chuyển thành butan-2-one. Hai chất còn lại lần lượt là alcohol bậc một và bậc ba."]
      ]
    },
    equilibrium: {
      sections: [
        ["Đọc biểu thức Kc", "Cân bằng phương trình trước. Với mỗi chất khí hoặc chất tan trong biểu thức, lấy nồng độ cân bằng lũy thừa hệ số. Tích của các số hạng phía sản phẩm đứng trên tử, phía chất phản ứng ở mẫu. Bỏ qua chất rắn tinh khiết và chất lỏng tinh khiết."],
        ["Dùng Qc để dự đoán chiều", "Qc có cùng dạng với Kc, nhưng dùng nồng độ tại thời điểm đang xét. Nếu Qc nhỏ hơn Kc, hệ chuyển theo chiều thuận để tạo thêm sản phẩm. Nếu Qc lớn hơn Kc, hệ chuyển theo chiều nghịch. Bằng nhau nghĩa là hệ đã cân bằng."],
        ["Phân biệt thêm chất và đổi nhiệt độ", "Ở cùng nhiệt độ, thêm hoặc bớt chất có thể làm thay đổi Qc. Hệ sẽ chuyển dịch cho tới khi Qc bằng lại Kc. Đổi nhiệt độ có thể làm đổi chính Kc. Tăng nhiệt độ ưu tiên chiều thu nhiệt."],
        ["Lập bảng nồng độ", "Ghi nồng độ ban đầu, phần thay đổi và nồng độ cân bằng ở ba dòng. Nếu sản phẩm tăng x mol/L thì các chất còn lại thay đổi theo tỉ lệ hệ số. Thế dòng cuối vào Kc hoặc dùng để đọc lượng chất ở cân bằng."]
      ],
      examples: [
        ["Xét H₂(g) + I₂(g) ⇌ 2HI(g). Tại một thời điểm, [H₂] = [I₂] = 0,20 M và [HI] = 0,20 M. Nếu Kc = 4, cân bằng chuyển theo chiều nào?", "Tính Qc = [HI]²/([H₂][I₂]) = (0,20)²/(0,20 × 0,20) = 1. Vì 1 nhỏ hơn 4, hệ chuyển theo chiều thuận. HI tăng còn H₂ và I₂ giảm."],
        ["Cho A(g) ⇌ 2B(g). Ban đầu chỉ có 0,60 M A. Khi cân bằng [B] = 0,40 M. Tìm [A] và Kc.", "Để tạo 0,40 M B cần tiêu thụ 0,40/2 = 0,20 M A. Do đó [A] = 0,60 − 0,20 = 0,40 M. Thế vào Kc = [B]²/[A] = 0,40²/0,40 = 0,40 theo các trị số nồng độ mol."]
      ],
      practice: [
        ["basic","Yếu tố nào có thể làm đổi Kc của một phản ứng đã viết cố định?",["Nhiệt độ","Lượng chất ban đầu","Chất xúc tác"],0,"Kc của cùng một phản ứng phụ thuộc vào nhiệt độ. Đổi lượng ban đầu có thể thay đổi nồng độ cân bằng. Xúc tác chỉ ảnh hưởng tốc độ."],
        ["basic","Với CaCO₃(s) ⇌ CaO(s) + CO₂(g), biểu thức Kc là gì?",["[CaO][CO₂]/[CaCO₃]","[CO₂]","1/[CO₂]"],1,"CaCO₃ và CaO đều là chất rắn tinh khiết nên được bỏ khỏi biểu thức. Chỉ CO₂ ở vế sản phẩm đóng góp vào Kc."],
        ["apply","Với A(g) ⇌ B(g), [A] = 0,20 M, [B] = 0,80 M và Kc = 2. Hệ sẽ chuyển theo chiều nào?",["Chiều thuận","Hệ đã cân bằng","Chiều nghịch"],2,"Qc = 0,80/0,20 = 4 lớn hơn Kc. Hệ tiêu thụ B và tạo thêm A theo chiều nghịch."],
        ["apply","Chiều thuận của một cân bằng có ΔH < 0. Tăng nhiệt độ làm cân bằng chuyển dịch thế nào?",["Theo chiều nghịch","Theo chiều thuận","Chắc chắn không đổi"],0,"Chiều thuận tỏa nhiệt nên chiều nghịch thu nhiệt. Tăng nhiệt độ ưu tiên chiều thu nhiệt."],
        ["challenge","Với 2A(g) ⇌ B(g), ban đầu [A] = 0,90 M và [B] = 0. Khi cân bằng [B] = 0,30 M. Kc bằng bao nhiêu theo các trị số nồng độ mol?",["0,33","3,33","1,00"],1,"Tạo 0,30 M B tiêu thụ 0,60 M A. Do đó [A] còn 0,30 M và Kc = 0,30/(0,30)² ≈ 3,33."],
        ["challenge","Cân bằng H₂(g) + I₂(g) ⇌ 2HI(g) trong mô hình khí lí tưởng. Nếu giảm một nửa thể tích ở nhiệt độ không đổi, điều gì xảy ra ngay sau khi nén?",["Qc gấp đôi Kc","Qc bằng một nửa Kc","Qc vẫn bằng Kc"],2,"Mọi nồng độ đều gấp đôi. Tử [HI]² nhân 4 và mẫu [H₂][I₂] cũng nhân 4, nên Qc không đổi."]
      ]
    },
    ph: {
      sections: [
        ["Nồng độ khác độ mạnh", "HCl là acid mạnh vì điện li gần hoàn toàn trong nước. CH₃COOH là acid yếu vì chỉ một phần phân tử cho proton. Dung dịch acid mạnh vẫn có thể rất loãng. Hãy đọc cả công thức chất và nồng độ trước khi tính pH."],
        ["Đọc ion và hệ số", "Với acid mạnh một proton như HCl, [H₃O⁺] xấp xỉ nồng độ acid trong bài tập dung dịch loãng thông thường. Với base mạnh Ba(OH)₂ hòa tan và điện li hoàn toàn, mỗi mol Ba(OH)₂ cho hai mol OH⁻. Tìm [OH⁻], tính pOH rồi đổi sang pH ở 25 °C."],
        ["Đổi thể tích trước khi tính mol", "Công thức n = C × V dùng thể tích V tính bằng lít. Khi pha loãng một dung dịch, số mol chất tan giữ nguyên. Với phản ứng trung hòa, tính số mol H₃O⁺ và OH⁻ trước, sau đó chia số mol ion còn dư cho tổng thể tích dung dịch."],
        ["Nhận cặp acid–base liên hợp", "Hai chất trong một cặp liên hợp chỉ khác nhau một proton H⁺. NH₄⁺ cho H⁺ thành NH₃, còn H₂O nhận H⁺ thành H₃O⁺. H₂O cũng có thể cho H⁺ để thành OH⁻ khi gặp base thích hợp."]
      ],
      examples: [
        ["Tính pH của dung dịch Ba(OH)₂ 0,0050 M ở 25 °C, coi điện li hoàn toàn.", "Bước 1. Một Ba(OH)₂ cho hai OH⁻, nên [OH⁻] = 2 × 0,0050 = 0,010 M. Bước 2. pOH = −log₁₀(0,010) = 2. Bước 3. pH = 14 − 2 = 12."],
        ["Trộn 50 mL HCl 0,020 M và 50 mL NaOH 0,010 M ở 25 °C. Tính pH, coi thể tích cộng được.", "Ban đầu có 0,0010 mol H₃O⁺ và 0,00050 mol OH⁻. Trung hòa theo tỉ lệ 1 : 1 nên còn 0,00050 mol H₃O⁺ trong 0,100 L. Suy ra [H₃O⁺] ≈ 0,0050 M, pH ≈ 2,30."]
      ],
      practice: [
        ["basic","Base liên hợp của H₂CO₃ sau khi mất một proton là chất nào?",["CO₃²⁻","HCO₃⁻","H₃O⁺"],1,"Khi mất một proton, H₂CO₃ mất một H và điện tích giảm một đơn vị, tạo HCO₃⁻."],
        ["basic","Hai dung dịch ở cùng điều kiện có pH lần lượt là 3 và 5. Tỉ số [H₃O⁺](pH 3)/[H₃O⁺](pH 5) xấp xỉ bao nhiêu?",["100","2","0,01"],0,"Giảm một đơn vị pH làm [H₃O⁺] tăng khoảng 10 lần. Hai đơn vị ứng với 10² = 100 lần."],
        ["apply","Pha loãng 25,0 mL HCl 0,040 M thành 100,0 mL. pH dung dịch mới xấp xỉ bao nhiêu?",["1","4","2"],2,"Nồng độ giảm bốn lần thành 0,010 M. HCl điện li hoàn toàn, nên pH ≈ −log₁₀(0,010) = 2."],
        ["apply","Tính pH xấp xỉ của KOH 0,00010 M ở 25 °C.",["10","4","7"],0,"KOH cho một OH⁻ trên mỗi đơn vị công thức. pOH ≈ 4 nên pH ≈ 14 − 4 = 10."],
        ["challenge","Trộn 20 mL HCl 0,10 M và 30 mL NaOH 0,10 M ở 25 °C. Bỏ qua thay đổi thể tích khi trộn. pH xấp xỉ bao nhiêu?",["1,70","12,30","7,00"],1,"Có 0,0020 mol acid và 0,0030 mol base. Còn 0,0010 mol OH⁻ trong 0,050 L, nên [OH⁻] ≈ 0,020 M và pH ≈ 14 − 1,70 = 12,30."],
        ["challenge","Có bao nhiêu mL dung dịch Ba(OH)₂ 0,050 M cần để trung hòa 20,0 mL dung dịch HCl 0,10 M?",["40,0 mL","10,0 mL","20,0 mL"],2,"HCl cung cấp 0,0020 mol H₃O⁺. Mỗi mol Ba(OH)₂ cho 2 mol OH⁻, nên cần 0,0010 mol Ba(OH)₂. Thể tích là 0,0010/0,050 = 0,020 L."]
      ]
    },
    nitrogen: {
      sections: [
        ["Dõi theo nitrogen trong hợp chất", "N trong N₂ có số oxi hóa 0. Trong NH₃ hoặc NH₄⁺, N có số oxi hóa −3. Trong NO và NO₂, N lần lượt có số oxi hóa +2 và +4. Trong NO₃⁻, N có số oxi hóa +5."],
        ["Phân biệt vai trò của ammonia", "Trong nước, NH₃ nhận proton từ H₂O, tạo NH₄⁺ và OH⁻. Đây là cân bằng nên một phần NH₃ vẫn tồn tại dưới dạng phân tử. Khi gặp acid, NH₃ nhận H⁺ và tạo muối ammonium."],
        ["Đọc phản ứng của SO₂", "Trong nhiều bài tập, SO₂ là một oxide acid. Khi có đủ OH⁻, phương trình ion là SO₂ + 2OH⁻ → SO₃²⁻ + H₂O. Sulfur vẫn có số oxi hóa +4, nên đây là phản ứng acid–base."],
        ["Nối ô nhiễm không khí với độ chua", "Qua các phản ứng trong khí quyển, hợp chất sulfur từ SO₂ có thể tạo sulfuric acid, còn các oxide nitrogen có thể dẫn tới nitric acid. Các chất này làm pH của nước mưa giảm. Nhận diện oxide ban đầu, rồi xét acid hoặc ion có thể hình thành."]
      ],
      examples: [
        ["Tính số oxi hóa của N trong NH₄⁺ và NO₃⁻. Nhận xét chênh lệch.", "Trong NH₄⁺, x + 4(+1) = +1 nên x = −3. Trong NO₃⁻, y + 3(−2) = −1 nên y = +5. Nếu N chuyển từ trạng thái −3 sang +5, số oxi hóa tăng tám đơn vị."],
        ["Một bài toán cho 0,015 mol SO₂ phản ứng với lượng vừa đủ NaOH để chỉ tạo Na₂SO₃ và nước. Tính số mol NaOH.", "Viết SO₂ + 2NaOH → Na₂SO₃ + H₂O. Tỉ lệ SO₂ : NaOH là 1 : 2, vậy cần 0,015 × 2 = 0,030 mol NaOH."]
      ],
      practice: [
        ["basic","Trong NO₂, nitrogen có số oxi hóa bao nhiêu?",["+2","+4","+5"],1,"Hai O đóng góp 2(−2) = −4. Phân tử trung hòa nên N có số oxi hóa +4."],
        ["basic","Ion nào được tạo thêm khi NH₃ nhận proton từ nước?",["OH⁻","Cl⁻","NO₃⁻"],0,"H₂O nhường một H⁺ thành OH⁻, còn NH₃ trở thành NH₄⁺."],
        ["apply","Có bao nhiêu mol H⁺ bị tiêu thụ khi 0,025 mol NH₃ chuyển hết thành NH₄⁺?",["0,050 mol","0,0125 mol","0,025 mol"],2,"NH₃ + H⁺ → NH₄⁺ có tỉ lệ 1 : 1, nên cần 0,025 mol H⁺."],
        ["apply","Khi các chất có đủ lượng OH⁻ để SO₂ tạo SO₃²⁻, số oxi hóa của sulfur thay đổi thế nào?",["+4 → +6","+4 → +4","+6 → +4"],1,"Từ SO₂ suy ra S là +4. Trong SO₃²⁻, x + 3(−2) = −2 cho x = +4. Sulfur không đổi số oxi hóa."],
        ["challenge","Hỗn hợp chứa 0,010 mol NH₃ và 0,020 mol NH₄Cl. Thêm 0,030 mol NaOH trong phép tính lý tưởng, coi toàn bộ NH₄⁺ chuyển thành NH₃. Tổng số mol NH₃ sau phản ứng là bao nhiêu?",["0,030 mol","0,020 mol","0,040 mol"],0,"OH⁻ dư so với NH₄⁺. Có 0,020 mol NH₃ mới từ NH₄⁺, cộng với 0,010 mol ban đầu được 0,030 mol."],
        ["challenge","Trong 2NO + O₂ → 2NO₂, mỗi nguyên tử N nhường tương đương bao nhiêu electron theo số oxi hóa?",["1 electron","4 electron","2 electron"],2,"N tăng số oxi hóa từ +2 lên +4. Mỗi nguyên tử N nhường tương đương hai electron."]
      ]
    },
    organic: {
      sections: [
        ["Ba cách biểu diễn", "Công thức đơn giản nhất cho tỉ lệ số nguyên tử tối giản. Công thức phân tử cho số nguyên tử thực tế. Công thức cấu tạo cho biết các nguyên tử nối với nhau thế nào, từ đó có thể nhận ra nhóm chức."],
        ["Từ tỉ lệ đến công thức phân tử", "Chia lượng mỗi nguyên tố cho nguyên tử khối để tính số mol nguyên tử, rồi chia tất cả cho giá trị nhỏ nhất. Quy tỉ lệ về số nguyên. Lấy phân tử khối thực nghiệm chia cho khối lượng công thức đơn giản nhất để tìm hệ số nhân."],
        ["Tìm đồng phân có hệ thống", "Liệt kê khung carbon thẳng và phân nhánh trước. Tiếp theo thử các vị trí khác nhau của nhóm chức, chú ý hai đầu mạch có thể tương đương. Nếu đề không giới hạn loại chất, kiểm tra xem công thức có thể ứng với nhóm chức khác hay không."],
        ["Kiểm tra hóa trị", "Carbon thường có tổng bậc liên kết bằng bốn, hydrogen bằng một, oxygen bằng hai trong các công thức trung hòa quen thuộc. Mỗi nét đơn được đếm một, nét đôi được đếm hai. Hãy dùng phép đếm này trước khi chốt một cấu tạo."]
      ],
      examples: [
        ["Chất chỉ chứa C, H, O có thành phần khối lượng 40,0% C, 6,67% H, 53,33% O và M = 60 g/mol. Tìm công thức phân tử, lấy C = 12, H = 1, O = 16.", "Giả sử có 100 g. Số mol nguyên tử lần lượt xấp xỉ 3,33 : 6,67 : 3,33, quy về 1 : 2 : 1. Công thức đơn giản nhất CH₂O có khối lượng ứng với 30 g/mol. Vì 60/30 = 2, công thức phân tử là C₂H₄O₂."],
        ["Liệt kê các alcohol no, đơn chức, mạch hở có công thức C₃H₈O.", "Chỉ có một khung ba carbon. Gắn –OH ở đầu mạch cho CH₃CH₂CH₂OH, ở giữa cho CH₃CH(OH)CH₃. Gắn ở đầu còn lại lặp cấu tạo đầu tiên. Có hai đồng phân alcohol."]
      ],
      practice: [
        ["basic","Công thức nào cho thấy cụ thể vị trí liên kết đôi trong propene?",["C₃H₆","CH₂","CH₂=CHCH₃"],2,"Công thức cấu tạo thu gọn chỉ ra liên kết đôi nằm giữa hai carbon đầu tiên."],
        ["basic","Công thức đơn giản nhất của C₄H₈O₂ là gì?",["C₂H₄O","C₂H₈O","CH₂O"],0,"Cả ba chỉ số có ước chung lớn nhất là 2. Chia 4 : 8 : 2 cho 2 được 2 : 4 : 1."],
        ["apply","Một chất có công thức đơn giản nhất là CH₂ và M = 56 g/mol. Công thức phân tử là gì? Cho C = 12, H = 1.",["C₂H₄","C₄H₈","C₄H₁₀"],1,"Khối lượng ứng với CH₂ là 14 g/mol. Hệ số nhân 56/14 = 4, suy ra C₄H₈."],
        ["apply","Cặp nào có cùng khung carbon nhưng khác vị trí nhóm –OH?",["Propan-1-ol và propan-2-ol","Butan-1-ol và 2-methylpropan-1-ol","Ethanol và dimethyl ether"],0,"Hai propanol đều có khung ba carbon nối tiếp. Nhóm –OH chuyển từ carbon đầu mạch sang carbon giữa mạch."],
        ["challenge","Có bao nhiêu đồng phân cấu tạo là alcohol no, đơn chức, mạch hở của C₄H₁₀O?",["3","5","4"],2,"Mạch thẳng cho butan-1-ol và butan-2-ol. Mạch nhánh cho 2-methylpropan-1-ol và 2-methylpropan-2-ol. Tổng cộng bốn."],
        ["challenge","Đốt cháy hoàn toàn 0,10 mol một hydrocarbon X thu được 0,30 mol CO₂ và 0,40 mol H₂O. Công thức phân tử X là gì?",["C₃H₆","C₃H₈","C₄H₈"],1,"Mỗi mol X tạo 3 mol CO₂ nên X có ba C. Mỗi mol X tạo 4 mol H₂O, ứng với tám H. Công thức là C₃H₈."]
      ]
    },
    hydrocarbon: {
      sections: [
        ["Đếm H theo dạng mạch", "Với hydrocarbon mạch hở có n carbon, alkane có 2n + 2 H. Một nối đôi làm giảm hai H, một nối ba làm giảm bốn H. Vì vòng cũng làm thiếu hai H, công thức CₙH₂ₙ tự nó chưa đủ để khẳng định đó là alkene."],
        ["Đọc phản ứng cộng", "Liên kết đôi C=C có thể cộng một mol H₂ trên mỗi mol liên kết đôi. Một liên kết ba C≡C có thể cộng tối đa hai mol H₂ nếu bị hydrogen hóa hoàn toàn. Dùng số liên kết rồi mới tính lượng chất."],
        ["Nhìn loại phản ứng của vòng thơm", "Benzene có hệ electron π phân bố trên cả vòng. Trong những phản ứng đặc trưng thường gặp, một H trên vòng bị thay bởi nhóm khác, còn vòng thơm được giữ lại. Vì thế không suy phản ứng của benzene chỉ từ hình vẽ có ba liên kết đôi."],
        ["Từ dẫn xuất halogen về alcohol", "Trong các bài tập thế ở carbon no, nhóm halogen của một số dẫn xuất như CH₃CH₂Br có thể được thay bằng –OH. Theo sơ đồ thế với OH⁻ trong nước, sản phẩm hữu cơ là CH₃CH₂OH, đồng thời ion Br⁻ được tạo ra."]
      ],
      examples: [
        ["Tính số mol H₂ tối đa để hydrogen hóa hoàn toàn 0,15 mol ethyne và 0,10 mol ethene.", "Ethyne có một liên kết ba nên cần 2 mol H₂ cho mỗi mol, tức 0,30 mol. Ethene có một liên kết đôi nên cần thêm 0,10 mol. Tổng cộng 0,40 mol H₂."],
        ["Mẫu 0,20 mol hydrocarbon mạch hở có đúng một liên kết ba và năm carbon. Tìm công thức phân tử và số mol CO₂ nếu đốt cháy hoàn toàn.", "Alkane năm carbon có C₅H₁₂. Thay một liên kết đơn bằng nối ba làm giảm bốn H, cho C₅H₈. Mỗi mol có năm C nên tạo tối đa 5 mol CO₂ khi đốt cháy hoàn toàn, tức 1,0 mol CO₂ từ mẫu."]
      ],
      practice: [
        ["basic","Công thức phân tử của một alkyne mạch hở có một nối ba và bốn carbon là gì?",["C₄H₈","C₄H₆","C₄H₁₀"],1,"Alkyne mạch hở có một nối ba theo CₙH₂ₙ₋₂. Với n = 4, số H là 6."],
        ["basic","Loại phản ứng nào giữ lại vòng thơm khi một H của benzene được thay bằng nhóm khác?",["Phản ứng thế","Phản ứng cộng hydrogen hoàn toàn","Phản ứng đốt cháy"],0,"Một nguyên tử H bị thay bằng nhóm khác nên đây là phản ứng thế."],
        ["apply","Trong sơ đồ CH₃CH₂Br + OH⁻ → X + Br⁻, sản phẩm hữu cơ X là gì?",["CH₃CH₃","CH₂=CH₂","CH₃CH₂OH"],2,"Trong phương trình đã cho, Br bị thay bằng –OH. Sản phẩm hữu cơ là ethanol."],
        ["apply","Đốt cháy hoàn toàn 0,20 mol propane cần bao nhiêu mol O₂?",["0,80 mol","1,00 mol","0,60 mol"],1,"C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, nên cần 0,20 × 5 = 1,00 mol O₂."],
        ["challenge","Hỗn hợp gồm ethene và ethyne, tổng 0,30 mol. Cần đúng 0,45 mol H₂ để hydrogen hóa hoàn toàn thành ethane. Có bao nhiêu mol ethyne?",["0,15 mol","0,20 mol","0,10 mol"],0,"Mỗi mol trong hỗn hợp cần ít nhất một mol H₂, ứng với 0,30 mol. Phần H₂ thêm 0,45 − 0,30 = 0,15 mol dành cho nối ba, nên có 0,15 mol ethyne."],
        ["challenge","Hai hydrocarbon đều có công thức C₃H₆. Một chất có liên kết đôi, chất còn lại có mạch vòng với các liên kết đơn. Cặp nào phù hợp?",["Propane và propene","Propyne và cyclopropane","Propene và cyclopropane"],2,"Propene giảm hai H so với propane do C=C. Cyclopropane cũng giảm hai H vì hình thành một vòng, dù chỉ có các liên kết đơn."]
      ]
    },
    carboxylic: {
      sections: [
        ["Nhận nhóm carboxyl", "Nhóm –COOH chứa C=O và O–H trên cùng một carbon. Carbon này được tính vào tổng số carbon của mạch acid. CH₃CH₂COOH có ba carbon, nên tên là propanoic acid."],
        ["Chọn phương trình theo chất đi cùng", "Với NaOH, acid đơn chức trung hòa theo tỉ lệ 1 : 1. Với NaHCO₃, tạo muối carboxylate, CO₂ và nước. Với Na₂CO₃, cần hai mol acid đơn chức cho mỗi mol carbonate để phản ứng hoàn toàn."],
        ["Giải thích tính acid", "Khi RCOOH mất H⁺, điện tích âm của ion RCOO⁻ phân bố trên hai nguyên tử oxygen. Ion carboxylate tương đối bền, nên carboxylic acid thông thường cho proton dễ hơn alcohol tương ứng."],
        ["Tìm lượng ester theo chất giới hạn", "Đổi khối lượng acid và alcohol ra mol. Phản ứng của acid đơn chức với alcohol đơn chức có tỉ lệ 1 : 1. Dùng số mol nhỏ hơn để tìm lượng ester tối đa, rồi nhân hiệu suất. Loại bớt nước có thể làm cân bằng dịch theo chiều tạo ester."]
      ],
      examples: [
        ["Cho 6,00 g acetic acid (M = 60 g/mol) phản ứng với NaHCO₃ dư. Tính thể tích CO₂ nếu thể tích mol khí ở điều kiện đề bài là 24,8 L/mol.", "Có n(CH₃COOH) = 6,00/60 = 0,100 mol. Phương trình CH₃COOH + NaHCO₃ → CH₃COONa + CO₂ + H₂O cho tỉ lệ acid : CO₂ là 1 : 1. Thể tích CO₂ là 0,100 × 24,8 = 2,48 L."],
        ["Bài toán ester hóa dùng 0,30 mol acetic acid và 0,20 mol ethanol, hiệu suất 60%. Tính khối lượng ethyl acetate (M = 88 g/mol).", "Hai chất phản ứng theo tỉ lệ 1 : 1 nên ethanol giới hạn lượng sản phẩm. Tối đa có 0,20 mol ester, thực tế là 0,20 × 0,60 = 0,12 mol. Khối lượng thu được 0,12 × 88 = 10,56 g."]
      ],
      practice: [
        ["basic","CH₃CH₂COOH có tên nào?",["Propanoic acid","Ethanoic acid","Butanoic acid"],0,"Mạch có ba carbon, kể cả carbon của nhóm –COOH, nên dùng gốc tên propan-."],
        ["basic","Chất nào là khí sinh ra khi acetic acid phản ứng với NaHCO₃?",["O₂","CO₂","H₂"],1,"HCO₃⁻ nhận H⁺. Sản phẩm cuối là CO₂ và H₂O, cùng với muối acetate."],
        ["apply","Cần bao nhiêu mol CH₃COOH để phản ứng hoàn toàn với 0,030 mol Na₂CO₃, tạo CO₂ và nước?",["0,015 mol","0,030 mol","0,060 mol"],2,"Mỗi CO₃²⁻ nhận hai proton để tạo CO₂ và nước. Cần 2 × 0,030 = 0,060 mol acid đơn chức."],
        ["apply","Trong cân bằng acid + alcohol ⇌ ester + nước, tách bớt nước khỏi hệ có lợi cho chiều nào?",["Tạo ester","Thủy phân ester","Không ảnh hưởng"],0,"Tách bớt một sản phẩm làm cân bằng dịch theo chiều tạo thêm sản phẩm, gồm ester và nước."],
        ["challenge","Ester hóa 0,50 mol acetic acid với 0,40 mol methanol. Hiệu suất theo chất giới hạn là 75%. Tính số mol methyl acetate thu được.",["0,375 mol","0,30 mol","0,40 mol"],1,"Tỉ lệ 1 : 1 và methanol có ít mol hơn. Lượng ester thu được là 0,40 × 0,75 = 0,30 mol."],
        ["challenge","Cần đúng 40,0 mL dung dịch NaOH 0,200 M để trung hòa 0,592 g một acid no, đơn chức, mạch hở. Với C = 12, H = 1, O = 16, acid đó là chất nào?",["Ethanoic acid (M = 60)","Methanoic acid (M = 46)","Propanoic acid (M = 74)"],2,"Đổi 40,0 mL = 0,0400 L. n(NaOH) = 0,00800 mol, bằng số mol acid. M = 0,592/0,00800 = 74 g/mol."]
      ]
    },
    titration: {
      sections: [
        ["Điểm tương đương và điểm đổi màu", "Điểm tương đương đạt được khi lượng dung dịch chuẩn thêm vào vừa đủ theo hệ số phản ứng. Điểm kết thúc là lúc quan sát được dấu hiệu như chất chỉ thị đổi màu. Chọn chất chỉ thị sao cho hai điểm ở gần nhau."],
        ["Tính lượng chất từ buret", "Thể tích dung dịch chuẩn đã thêm bằng số đọc cuối trừ số đọc đầu. Đổi mL sang L để dùng n = C × V, rồi lấy hệ số phương trình để suy ra mol chất trong mẫu."],
        ["Kiểm tra số proton trao đổi", "Với HCl và NaOH, tỉ lệ mol là 1 : 1. Nếu H₂SO₄ được trung hòa hoàn toàn, mỗi mol acid cần hai mol NaOH. Viết phương trình trước khi dùng công thức tính nồng độ."],
        ["Đọc pH gần điểm tương đương", "Trong phép chuẩn độ acid mạnh bằng base mạnh ở 25 °C, pH tại điểm tương đương xấp xỉ 7. Trước hoặc sau điểm đó, tính pH từ số mol acid hay base còn dư và tổng thể tích. Với acid yếu hoặc base yếu, pH tương đương có thể khác 7."]
      ],
      examples: [
        ["Chuẩn độ 20,0 mL dung dịch HCl bằng NaOH 0,100 M. Số đọc buret đầu và cuối lần lượt là 1,20 mL và 17,40 mL. Tìm nồng độ HCl.", "Thể tích NaOH đã dùng là 17,40 − 1,20 = 16,20 mL. n(NaOH) = 0,100 × 0,01620 = 0,001620 mol. Tỉ lệ HCl : NaOH là 1 : 1, nên C(HCl) = 0,001620/0,0200 = 0,0810 M."],
        ["Chuẩn độ 25,0 mL dung dịch H₂SO₄ bằng 20,0 mL NaOH 0,100 M tới trung hòa hoàn toàn. Tìm nồng độ H₂SO₄.", "Phương trình có tỉ lệ H₂SO₄ : NaOH là 1 : 2. n(NaOH) = 0,100 × 0,0200 = 0,00200 mol. Suy ra n(H₂SO₄) = 0,00100 mol, vậy C(H₂SO₄) = 0,00100/0,0250 = 0,0400 M."]
      ],
      practice: [
        ["basic","Buret có số đọc đầu 2,40 mL và cuối 19,65 mL. Thể tích dung dịch đã thêm là bao nhiêu?",["22,05 mL","19,65 mL","17,25 mL"],2,"Lấy số đọc cuối trừ số đọc đầu: 19,65 − 2,40 = 17,25 mL."],
        ["basic","Đặc điểm nào xác định điểm tương đương?",["Lượng chất theo đúng tỉ lệ phương trình","Dung dịch luôn trung tính","Thể tích acid luôn bằng thể tích base"],0,"Điểm tương đương dựa vào tỉ lệ mol của phương trình. pH và thể tích còn tùy acid, base và nồng độ."],
        ["apply","Trung hòa 10,0 mL HCl bằng đúng 15,0 mL KOH 0,20 M. Nồng độ HCl bằng bao nhiêu?",["0,13 M","0,30 M","0,20 M"],1,"n(KOH) = 0,20 × 0,0150 = 0,0030 mol, cũng là n(HCl). Chia cho 0,0100 L được 0,30 M."],
        ["apply","Cần bao nhiêu mL HCl 0,100 M để trung hòa 25,0 mL Ba(OH)₂ 0,0200 M, coi điện li hoàn toàn?",["5,00 mL","20,0 mL","10,0 mL"],2,"Ba(OH)₂ cung cấp 2 × 0,0250 × 0,0200 = 0,00100 mol OH⁻. Cần 0,00100 mol HCl, tương ứng 0,0100 L."],
        ["challenge","Pha 10,0 mL dung dịch HCl gốc thành 100,0 mL. Lấy 20,0 mL dung dịch sau pha, chuẩn độ bằng 12,0 mL NaOH 0,100 M. Tính nồng độ HCl gốc.",["0,600 M","0,0600 M","0,120 M"],0,"Mẫu 20,0 mL có 0,00120 mol HCl, nên nồng độ sau pha là 0,00120/0,0200 = 0,0600 M. Dung dịch gốc đậm đặc gấp 10 lần, tức 0,600 M."],
        ["challenge","Thêm 20,0 mL NaOH 0,100 M vào 30,0 mL HCl 0,100 M ở 25 °C. pH xấp xỉ bao nhiêu, coi thể tích cộng được?",["12,30","1,70","2,00"],1,"Ban đầu có 0,00300 mol HCl và 0,00200 mol NaOH. Acid dư 0,00100 mol trong 0,0500 L, nên [H₃O⁺] ≈ 0,0200 M, pH ≈ 1,70."]
      ]
    },
    carbonyl: {
      sections: [
        ["Khoanh carbon của C=O", "Ở aldehyde, carbon của C=O nối trực tiếp ít nhất một H, nên có thể viết nhóm –CHO. Trong ketone, carbon này nối trực tiếp với hai carbon khác, dạng R–CO–R′. Xác định các nguyên tử ở hai bên C=O rồi mới gọi tên."],
        ["Từ cấu tạo đến tên", "Trong aldehyde mạch hở, carbon của –CHO thuộc mạch chính và mang số 1. Với ketone, chọn chiều đánh số sao cho carbon của C=O có số nhỏ nhất. Ví dụ CH₃COCH₂CH₃ là butan-2-one."],
        ["Đọc chiều oxi hóa và chiều khử", "Trong các sơ đồ cơ bản, aldehyde có thể bị oxi hóa thành carboxylic acid hoặc carboxylate tùy môi trường. Khi khử nhóm carbonyl, aldehyde thông thường tạo alcohol bậc một, còn ketone tạo alcohol bậc hai."],
        ["Dùng tính khử để phân biệt", "Trong các cặp aldehyde và ketone đơn giản của chương trình phổ thông, aldehyde làm ion bạc trong thuốc thử Tollens bị khử thành Ag. Ketone đơn giản như propanone không cho hiện tượng đó. Với aldehyde đơn chức thông thường, tỉ lệ lý thuyết là 1 mol aldehyde tạo 2 mol Ag."]
      ],
      examples: [
        ["Tìm hai hợp chất carbonyl mạch hở có công thức C₃H₆O và viết sản phẩm khi khử từng chất.", "Nếu carbonyl ở đầu mạch, chất là CH₃CH₂CHO (propanal). Khử nhóm –CHO cho CH₃CH₂CH₂OH (propan-1-ol). Nếu carbonyl ở giữa, chất là CH₃COCH₃ (propanone). Khử nhóm C=O cho CH₃CH(OH)CH₃ (propan-2-ol)."],
        ["Một hỗn hợp có 0,10 mol ethanal và 0,12 mol propanone. Theo phép tính lý thuyết với thuốc thử Tollens dư, tính số mol Ag.", "Ethanal là aldehyde đơn chức, mỗi mol khử lượng ion bạc tương ứng 2 mol Ag. Propanone là ketone đơn giản nên không tham gia. Thu được 0,10 × 2 = 0,20 mol Ag."]
      ],
      practice: [
        ["basic","Chất nào là ketone?",["CH₃CH₂COCH₃","CH₃CH₂CHO","CH₃CH₂COOH"],0,"Carbon của C=O trong CH₃CH₂COCH₃ gắn với hai carbon khác. Hai chất còn lại có nhóm –CHO hoặc –COOH."],
        ["basic","Chất nào trong ba chất dưới đây cho phản ứng tráng bạc theo kiến thức phổ thông?",["Propanone","Propanal","Propan-2-ol"],1,"Propanal là aldehyde. Nó bị oxi hóa đồng thời ion bạc bị khử thành Ag."],
        ["apply","Khử butan-2-one, CH₃COCH₂CH₃, cho sản phẩm hữu cơ nào?",["Butan-1-ol","Butanal","Butan-2-ol"],2,"Nhóm C=O ở carbon số 2 chuyển thành –CH(OH)–. Khung carbon và vị trí nhóm chức được giữ."],
        ["apply","Nếu 0,050 mol propanal phản ứng hoàn toàn với thuốc thử Tollens dư, số mol Ag lý thuyết là bao nhiêu?",["0,100 mol","0,050 mol","0,025 mol"],0,"Một nhóm –CHO của propanal trao đổi hai electron khi bị oxi hóa. Hai ion bạc nhận mỗi ion một electron, cho 0,100 mol Ag."],
        ["challenge","Có bao nhiêu aldehyde và ketone no, đơn chức, mạch hở là đồng phân cấu tạo của C₄H₈O?",["2","3","4"],1,"Có hai aldehyde là butanal và 2-methylpropanal. Ketone chỉ có butan-2-one vì carbonyl phải nằm giữa hai gốc carbon với tổng ba carbon."],
        ["challenge","Một hỗn hợp 0,100 mol gồm ethanal và propanone tạo 10,8 g Ag với thuốc thử Tollens dư (M(Ag) = 108 g/mol). Tính phần trăm mol ethanal.",["25%","100%","50%"],2,"n(Ag) = 10,8/108 = 0,100 mol. Chỉ ethanal tạo Ag theo tỉ lệ 1 : 2, nên có 0,0500 mol ethanal, chiếm 50% số mol hỗn hợp."]
      ]
    }
  },
  extra: [
    {
      id: "titration",
      grade: 11,
      title: "Chuẩn độ acid–base",
      summary: "Dùng thể tích dung dịch chuẩn để tìm nồng độ và tính pH quanh điểm tương đương.",
      theory: [
        "Chuẩn độ là cách xác định lượng chất trong mẫu bằng dung dịch chuẩn có nồng độ đã biết.",
        "Bài toán thường bắt đầu bằng việc viết phương trình trung hòa, sau đó dùng số mol dung dịch chuẩn và tỉ lệ hệ số để suy ra nồng độ mẫu."
      ],
      example: "Chuẩn độ 25,0 mL HCl bằng đúng 30,0 mL NaOH 0,100 M. Tìm nồng độ HCl.",
      solution: "n(NaOH) = 0,0300 × 0,100 = 0,00300 mol, bằng số mol HCl. Do đó C(HCl) = 0,00300/0,0250 = 0,120 M.",
      questions: [
        ["Trong bài chuẩn độ HCl bằng NaOH, tỉ lệ mol acid : base bằng bao nhiêu?",["1 : 2","1 : 1","2 : 1"],1,"HCl và NaOH mỗi chất cung cấp một ion tham gia phản ứng H₃O⁺ + OH⁻ → 2H₂O."],
        ["Ở điểm tương đương của chuẩn độ HCl bằng NaOH tại 25 °C, pH xấp xỉ bao nhiêu?",["14","1","7"],2,"Acid mạnh và base mạnh đã trung hòa theo tỉ lệ vừa đủ. Trong mô hình dung dịch loãng, pH xấp xỉ 7."]
      ]
    },
    {
      id: "carbonyl",
      grade: 11,
      title: "Aldehyde và ketone",
      summary: "So sánh phản ứng của hai nhóm chất chứa C=O và luyện bài nhận biết, tính mol.",
      theory: [
        "Aldehyde và ketone đều chứa nhóm carbonyl C=O. Mối liên kết giữa carbon của C=O và các nguyên tử kế bên quyết định chúng thuộc nhóm nào.",
        "Aldehyde thông thường có thể bị oxi hóa bởi thuốc thử nhẹ dùng để nhận biết. Trong các ví dụ đơn giản, ketone không cho phản ứng tráng bạc."
      ],
      example: "Chất nào trong CH₃CHO và CH₃COCH₃ là aldehyde? Chất nào có thể cho phản ứng tráng bạc?",
      solution: "CH₃CHO là ethanal vì carbon của C=O còn trực tiếp nối với H, nên có thể cho phản ứng tráng bạc. CH₃COCH₃ có carbon của C=O nối với hai nhóm CH₃, nên là ketone.",
      questions: [
        ["Nhóm chức nào dùng để nhận ra aldehyde?",["–CHO","–OH","–COOH"],0,"Nhóm –CHO có carbonyl và H nối trực tiếp với carbon của C=O."],
        ["Theo sơ đồ phổ thông, khử ethanal tạo sản phẩm nào?",["Ethanoic acid","Ethanol","Propane"],1,"Khử –CHO chuyển cấu trúc CH₃CHO thành CH₃CH₂OH, tức ethanol."]
      ]
    }
  ]
};
