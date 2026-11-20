const semesterAlcohol = {
  details:{
    'alcohol-properties':{
      sections:[
        ['Dự đoán tính tan và nhiệt độ sôi', 'Nhóm –OH có thể tạo liên kết hydrogen giữa các phân tử alcohol và với nước. Ở các alcohol có cùng số nhóm –OH và cấu trúc tương tự, mạch carbon dài hơn thường làm độ tan trong nước giảm. Alcohol nhẹ thường có nhiệt độ sôi cao hơn ether đồng phân do các phân tử ether tinh khiết không tự cho liên kết hydrogen qua O–H.'],
        ['Nhận nhóm –OH kề nhau', 'Các polyalcohol như ethylene glycol hoặc glycerol có nhóm –OH nằm trên các carbon kế nhau. Trong bài tập nhận biết phổ thông, chúng hòa tan Cu(OH)₂ mới tạo ở nhiệt độ thường và cho dung dịch xanh lam đậm. Đây là dấu hiệu để phân biệt với ethanol.'],
        ['Chọn hướng tách nước', 'Trong các sơ đồ phổ thông, tách nước nội phân tử của một alcohol thích hợp tạo alkene. Tách nước liên phân tử giữa hai phân tử ethanol tạo diethyl ether. Hãy đọc điều kiện và sản phẩm yêu cầu trước khi chọn kiểu phương trình.'],
        ['Đổi giữa độ cồn, thể tích và khối lượng', 'Độ cồn tính theo thể tích, ví dụ dung dịch 20% v/v chứa 20 mL ethanol trong mỗi 100 mL dung dịch. Sau khi tìm thể tích ethanol, dùng m = ρV để tính khối lượng. Với bài lên men, dùng C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, sau đó nhân hiệu suất một lần ở bước tìm lượng thực tế.'],
        ['Kiểm tra chất đi cùng trong bài định lượng', 'Nếu dung dịch alcohol còn chứa nước, cả nước và alcohol có thể sinh H₂ với Na theo phương trình trên giấy. Nếu đề đốt cháy hoàn toàn alcohol rồi dẫn khí vào dung dịch chất hấp thụ, hãy tách lượng CO₂ tạo thành khỏi khối lượng dung dịch và lượng kết tủa.']
      ],
      examples:[
        ['Theo phương trình lên men, 90,0 g glucose (M = 180 g/mol) cho bao nhiêu gam ethanol nếu hiệu suất là 80,0%? Lấy M(ethanol) = 46,0 g/mol.',
         'Có 0,500 mol glucose, tối đa tạo 2 × 0,500 = 1,00 mol ethanol. Với hiệu suất 80,0%, lượng thực tế là 0,800 mol. Khối lượng thu được là 0,800 × 46,0 = 36,8 g.'],
        ['Nêu hai sản phẩm hữu cơ có thể gặp trong các bài tách nước ethanol và phân loại hai phương trình.',
         'Tách nước nội phân tử tạo ethene theo C₂H₅OH → C₂H₄ + H₂O. Trong sơ đồ tách nước liên phân tử, 2C₂H₅OH → C₂H₅OC₂H₅ + H₂O, sản phẩm hữu cơ là diethyl ether. Điều kiện đề bài cho biết sơ đồ được dùng.']
      ],
      practice:[
        ['basic','Điều gì giải thích ethanol có nhiệt độ sôi cao hơn dimethyl ether dù hai chất có cùng công thức phân tử?', ['Ethanol tạo được liên kết hydrogen giữa các phân tử','Dimethyl ether có phân tử khối nhỏ hơn','Ethanol có liên kết ion'],0,'Ethanol có O–H nên các phân tử có thể cho và nhận liên kết hydrogen. Dimethyl ether có oxygen nhưng thiếu nhóm O–H.'],
        ['basic','Chất nào có hai nhóm –OH gắn trên hai carbon kề nhau?', ['Propan-1,3-diol','Butan-1,4-diol','Butan-2,3-diol'],2,'Trong butan-2,3-diol, các carbon số 2 và 3 liền nhau. Hai chất còn lại có nhóm –OH ở những vị trí cách xa nhau.'],
        ['apply','Một dung dịch 15,0% v/v có thể tích 260 mL. Lấy khối lượng riêng ethanol là 0,80 g/mL. Tính khối lượng ethanol.', ['39,0 g','31,2 g','48,8 g'],1,'Thể tích ethanol là 260 × 0,150 = 39,0 mL. Khối lượng là 39,0 × 0,80 = 31,2 g.'],
        ['apply','Trong sơ đồ tách nước nội phân tử của butan-2-ol, nhóm sản phẩm hữu cơ phù hợp là gì?', ['Các butene','Các butane','Các butanone'],0,'Tách H₂O từ –OH và H ở carbon kề làm hình thành một nối đôi, tạo alkene C₄H₈.'],
        ['challenge','Lên men 270 g glucose (M = 180 g/mol). Từ ethanol thu được có thể pha 460 mL dung dịch 25% v/v. Lấy ρ(ethanol) = 0,80 g/mL và M(ethanol) = 46 g/mol. Hiệu suất lên men là bao nhiêu?', ['75,0%','50,0%','66,7%'],2,'Thể tích ethanol là 460 × 0,25 = 115 mL, khối lượng 92 g, tức 2 mol. 270/180 = 1,5 mol glucose có thể tạo 3 mol ethanol. Hiệu suất là 2/3 × 100% ≈ 66,7%.'],
        ['challenge','Đốt cháy hoàn toàn 0,15 mol ethanol, dẫn toàn bộ CO₂ vào nước vôi trong dư. Cho M(CaCO₃) = 100 g/mol. Khối lượng kết tủa là bao nhiêu?', ['15 g','30 g','45 g'],1,'Mỗi mol ethanol chứa 2 mol nguyên tử C nên tạo 2 mol CO₂. Có 0,30 mol CO₂. Với Ca(OH)₂ dư, CO₂ tạo 0,30 mol CaCO₃, tương ứng 30 g.']
      ]
    }
  },
  extra:[{
    id:'alcohol-properties',grade:11,title:'Alcohol và polyalcohol',summary:'Ôn liên kết hydrogen, tách nước, lên men và cách tính độ cồn.',
    theory:['Alcohol no, đơn chức, mạch hở có công thức CₙH₂ₙ₊₁OH (n ≥ 1). Khi gọi tên thay thế, chọn mạch chứa carbon mang –OH và ưu tiên cho nhóm –OH số chỉ vị trí nhỏ nhất.','Glycerol có ba nhóm –OH. Hãy đếm số nhóm –OH và xem chúng có kề nhau khi dự đoán hiện tượng hoặc tính số mol chất tham gia.'],
    example:'Tính thể tích ethanol trong 180 mL dung dịch 35,0% v/v.',
    solution:'Thể tích ethanol bằng 180 × 0,350 = 63,0 mL. Dùng thể tích dung dịch đã cho làm mốc 100%.',
    questions:[
      ['CH₃CH(OH)CH₂CH₂CH₃ được gọi tên thế nào?', ['Pentan-4-ol','Pentan-2-ol','Pentan-3-ol'],1,'Đánh số từ đầu gần nhóm –OH để có vị trí 2.'],
      ['Tên thay thế của glycerol là gì?', ['Propane-1,2,3-triol','Propan-2-ol','Propane-1,3-diol'],0,'Mạch có ba carbon và mỗi carbon gắn một nhóm –OH, nên dùng 1,2,3-triol.']
    ]
  }]
};
