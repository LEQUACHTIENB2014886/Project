<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lý Thuyết Âm Nhạc Cơ Bản</title>
</head>

<body>
    <div class="music-theory-wrapper">
        <h1 class="music-theory-title">Lý Thuyết Âm Nhạc Cơ Bản</h1>

        <div class="music-theory-tabs">
            <button class="music-theory-tab active" onclick="showMusicTheoryContent(0)">Nốt Nhạc</button>
            <button class="music-theory-tab" onclick="showMusicTheoryContent(1)">Nhịp và Phách</button>
            <button class="music-theory-tab" onclick="showMusicTheoryContent(2)">Quãng</button>
            <button class="music-theory-tab" onclick="showMusicTheoryContent(3)">Hợp Âm</button>
            <button class="music-theory-tab" onclick="showMusicTheoryContent(4)">Gam Trưởng và Gam Thứ</button>
            <button class="music-theory-tab" onclick="showMusicTheoryContent(5)">Hóa Biến</button>
            <button class="music-theory-tab" onclick="showMusicTheoryContent(6)">Điệu Thức</button>
        </div>

        <div class="music-theory-content active">
            <h2>Nốt Nhạc và Cao Độ</h2>
            <p>Nốt nhạc là đơn vị cơ bản trong âm nhạc, mỗi nốt có tên và cao độ riêng. Có 7 nốt cơ bản: Do, Re, Mi, Fa, Sol, La, Si. Các nốt này có thể lặp lại ở các quãng tám khác nhau, từ quãng tám thấp nhất (C1) đến quãng tám cao nhất (C8).</p>

            <p><strong>Các đặc điểm của nốt nhạc:</strong></p>
            <ul>
                <li><strong>Do:</strong> Là nốt khởi đầu trong gam Đô trưởng (C major).</li>
                <li><strong>Re:</strong> Được dùng nhiều trong các câu nhạc kết hợp.</li>
                <li><strong>Mi:</strong> Là nốt biểu thị sự vui tươi.</li>
                <li><strong>Fa:</strong> Nốt quan trọng giúp xây dựng hợp âm trưởng.</li>
                <li><strong>Sol:</strong> Được sử dụng nhiều trong phần cao trào của bản nhạc.</li>
                <li><strong>La:</strong> Nốt đầu tiên của gam La thứ (A minor).</li>
                <li><strong>Si:</strong> Tạo cảm giác căng thẳng, thường dùng để kết câu nhạc.</li>
            </ul>

            <p><strong>Các loại cao độ:</strong></p>
            <ul>
                <li><strong>Cao độ tự nhiên:</strong> Nốt nhạc không bị thay đổi bởi dấu hóa.</li>
                <li><strong>Cao độ thăng:</strong> Tăng nửa cung so với nốt tự nhiên.</li>
                <li><strong>Cao độ giáng:</strong> Giảm nửa cung so với nốt tự nhiên.</li>
                <li><strong>Cao độ kép:</strong> Dấu thăng kép (𝄪) và giáng kép (𝄫) tăng hoặc giảm 2 nửa cung.</li>
            </ul>

            <img src="../library/image/theory/Khuonngnhac.png" alt="Khuông nhạc">
        </div>

        <div class="music-theory-content">
            <h2>Nhịp và Phách</h2>
            <p>Nhịp và phách đóng vai trò quan trọng trong việc tạo nên cấu trúc của bản nhạc. Nhịp là cách chia thời gian thành các phần bằng nhau, còn phách là các nhịp nhỏ trong ô nhịp.</p>

            <p><strong>Các loại nhịp phổ biến:</strong></p>
            <ul>
                <li><strong>Nhịp 2/4:</strong> Thường dùng trong các bài hành khúc.</li>
                <li><strong>Nhịp 4/4:</strong> Là nhịp phổ biến nhất, dùng trong nhạc pop, rock, và cổ điển.</li>
                <li><strong>Nhịp 3/4:</strong> Đặc trưng cho các điệu Waltz.</li>
                <li><strong>Nhịp 6/8:</strong> Thường thấy trong nhạc dân gian và nhạc blues.</li>
                <li><strong>Nhịp phức:</strong> Ví dụ 5/4 hoặc 7/8, tạo cảm giác không đều và phức tạp.</li>
            </ul>

            <p><strong>Phách:</strong> Mỗi ô nhịp có thể được chia thành các phách mạnh và nhẹ:</p>
            <ul>
                <li>Phách mạnh: Là phách đầu tiên trong mỗi ô nhịp.</li>
                <li>Phách nhẹ: Các phách tiếp theo có cường độ nhẹ hơn.</li>
                <li>Phách yếu: Có thể thêm vào để tạo sự linh hoạt trong nhịp điệu.</li>
            </ul>
        </div>

        <div class="music-theory-content">
            <h2>Quãng (Khoảng Cách Giữa Nốt Nhạc)</h2>
            <p>Quãng là khoảng cách giữa hai nốt nhạc về cao độ. Nó quyết định cảm giác hòa âm giữa các nốt. Có nhiều loại quãng khác nhau, mỗi loại mang đặc tính riêng.</p>

            <p><strong>Các loại quãng:</strong></p>
            <ul>
                <li><strong>Quãng 1:</strong> Hai nốt giống nhau.</li>
                <li><strong>Quãng 2:</strong> Khoảng cách giữa hai nốt liền kề, ví dụ Do - Re.</li>
                <li><strong>Quãng 3:</strong> Khoảng cách Do - Mi, thường tạo cảm giác hài hòa.</li>
                <li><strong>Quãng 4:</strong> Thường tạo cảm giác mạnh mẽ, như Do - Fa.</li>
                <li><strong>Quãng 5:</strong> Quãng mạnh, ví dụ Do - Sol.</li>
                <li><strong>Quãng 6:</strong> Mang cảm giác dịu dàng.</li>
                <li><strong>Quãng 7:</strong> Quãng căng thẳng, ví dụ Do - Si.</li>
                <li><strong>Quãng 8 (Quãng 8 đúng):</strong> Hai nốt giống nhau nhưng cách nhau một quãng tám.</li>
            </ul>
        </div>

        <div class="music-theory-content">
            <h2>Hóa Biến (Dấu Thăng, Dấu Giáng)</h2>
            <p>Hóa biến là một công cụ quan trọng trong âm nhạc, giúp thay đổi cao độ của nốt nhạc, tạo nên sự đa dạng và phong phú cho giai điệu và hòa âm. Các dấu hóa biến có thể thay đổi âm sắc của nốt nhạc, từ đó tạo ra các hiệu ứng âm nhạc khác nhau. Dưới đây là những khái niệm và ứng dụng cơ bản của hóa biến:</p>

            <ul>
                <li><strong>Dấu thăng:</strong> Là dấu hiệu được đặt trước một nốt nhạc để tăng cao độ của nó lên một nửa cung. Dấu thăng (♯) làm cho nốt nhạc trở nên cao hơn so với vị trí gốc của nó trong gam tự nhiên.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Fa</strong>, dấu thăng làm nó thành <strong>Fa♯</strong>, tương đương với âm thanh cao hơn nốt Fa một nửa cung.</li>
                    <li><strong>Các dấu thăng trong gam:</strong> Các dấu thăng được sử dụng để điều chỉnh nốt trong gam, chẳng hạn trong gam G major (Sol trưởng), dấu thăng có mặt ở nốt Fa, tạo thành Fa#.</li>
                </ul>

                <li><strong>Dấu giáng:</strong> Là dấu hiệu được đặt trước một nốt nhạc để giảm cao độ của nó xuống một nửa cung. Dấu giáng (♭) giúp làm giảm âm thanh của nốt xuống một nửa cung so với vị trí gốc của nó trong gam tự nhiên.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Si</strong>, dấu giáng sẽ làm nó thành <strong>Si♭</strong>, tương đương với âm thanh thấp hơn nốt Si một nửa cung.</li>
                    <li><strong>Các dấu giáng trong gam:</strong> Gam F major (Fa trưởng) sử dụng dấu giáng ở nốt Si (Si♭), giúp tạo ra âm thanh trầm và dễ chịu hơn.</li>
                </ul>

                <li><strong>Dấu thăng kép:</strong> Là dấu hiệu tăng hai nửa cung cho một nốt nhạc. Dấu thăng kép (𝄪) được sử dụng khi cần tăng âm thanh của nốt lên một cung trọn (tương đương với một thăng kép).</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Fa</strong>, dấu thăng kép sẽ biến nó thành <strong>Fa𝄪</strong>, tương đương với âm thanh cao hơn nốt Fa hai nửa cung, hoặc giống như nốt Sol.</li>
                    <li><strong>Công dụng:</strong> Dấu thăng kép thường được sử dụng trong các tác phẩm âm nhạc phức tạp, giúp tạo ra sự biến đổi mạnh mẽ trong giai điệu.</li>
                </ul>

                <li><strong>Dấu giáng kép:</strong> Là dấu hiệu giảm hai nửa cung cho một nốt nhạc. Dấu giáng kép (𝄫) được sử dụng khi cần giảm âm thanh của nốt xuống một cung trọn (tương đương với một giáng kép).</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Mi</strong>, dấu giáng kép sẽ biến nó thành <strong>Mi𝄫</strong>, tương đương với âm thanh thấp hơn nốt Mi hai nửa cung, hoặc giống như nốt Re.</li>
                    <li><strong>Công dụng:</strong> Dấu giáng kép giúp tạo ra sự biến chuyển về cao độ mạnh mẽ, thường thấy trong các hợp âm giảm hoặc trong những đoạn nhạc với cảm giác căng thẳng.</li>
                </ul>

                <li><strong>Dấu bình:</strong> Là dấu hiệu được sử dụng để hủy bỏ dấu thăng, dấu giáng hoặc dấu thăng kép đã áp dụng cho nốt nhạc. Dấu bình (♮) sẽ đưa nốt trở lại trạng thái tự nhiên của nó.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Fa#</strong> (Fa thăng), dấu bình sẽ biến nó trở lại nốt <strong>Fa</strong> tự nhiên, loại bỏ dấu thăng.</li>
                    <li><strong>Ứng dụng dấu bình:</strong> Dấu bình rất quan trọng trong việc điều chỉnh và đưa các nốt nhạc về lại trạng thái chuẩn của chúng trong một tác phẩm âm nhạc.</li>
                </ul>
            </ul>

            <h3>Ứng dụng của hóa biến trong âm nhạc</h3>
            <p>Hóa biến có vai trò quan trọng trong việc tạo ra những sắc thái khác biệt cho bản nhạc. Khi sử dụng đúng cách, chúng có thể thay đổi toàn bộ cảm xúc và màu sắc của một giai điệu. Dưới đây là một số ứng dụng cụ thể:</p>

            <ul>
                <li><strong>Điều chỉnh tông của gam:</strong> Hóa biến có thể thay đổi tông của một bản nhạc. Ví dụ, trong gam A minor, nếu bạn sử dụng dấu thăng ở nốt Sol (Sol#), bạn có thể tạo ra một chuyển động về hợp âm trưởng (A major) mà không phải thay đổi toàn bộ cấu trúc của gam.</li>

                <li><strong>Thể hiện sự thay đổi âm điệu trong giai điệu:</strong> Dấu thăng hoặc dấu giáng có thể thay đổi âm điệu của một giai điệu, tạo ra cảm giác khác biệt giữa các đoạn nhạc. Ví dụ, trong một đoạn nhạc có cảm giác vui vẻ, bạn có thể thêm dấu thăng để tạo ra một cảm giác sáng sủa hơn.</li>

                <li><strong>Thêm tính linh hoạt trong hòa âm:</strong> Hóa biến có thể làm cho các hợp âm trở nên phức tạp và phong phú hơn. Hợp âm C7 (Do 7) có thể chuyển thành C7♯9 hoặc C7♭13 với sự kết hợp của các dấu thăng và giáng, làm tăng tính thẩm mỹ và sự đa dạng của hòa âm.</li>

                <li><strong>Cải thiện sự mượt mà giữa các đoạn nhạc:</strong> Dấu bình có thể giúp tạo ra sự chuyển tiếp mượt mà giữa các nốt trong một tác phẩm, tránh sự "gian lận" âm thanh và giúp các đoạn nhạc chảy trôi tự nhiên hơn.</li>
            </ul>

            <h3>Các loại hóa biến khác và ứng dụng</h3>
            <p>Có một số loại hóa biến khác không được sử dụng phổ biến nhưng cũng có vai trò quan trọng trong việc tạo ra các hiệu ứng âm nhạc độc đáo:</p>

            <ul>
                <li><strong>Dấu thăng nhạc cổ điển (Tritone Substitution):</strong> Đây là dấu thăng sử dụng trong các hợp âm jazz, nơi một hợp âm có thể thay thế bằng một hợp âm cách nó một quãng ba hoặc ba cung.</li>

                <li><strong>Dấu thăng tự nhiên (Natural Sign):</strong> Dấu này không phải là một dấu hóa biến chính thức nhưng có thể xuất hiện trong các bản nhạc để chỉ ra rằng nốt trước đó đã bị thay đổi, và giờ đây nốt này trở lại trạng thái ban đầu.</li>
            </ul>
        </div>

        <div class="music-theory-content">
            <h2>Gam Trưởng và Gam Thứ</h2>
            <p>Gam trưởng và gam thứ là hai hệ thống chính giúp xác định cảm xúc và tính chất của bản nhạc. Chúng là cơ sở cho việc xây dựng hợp âm và giúp tạo ra các giai điệu trong âm nhạc. Mỗi gam có một đặc điểm riêng, ảnh hưởng đến cảm giác mà bản nhạc truyền tải.</p>

            <p><strong>Gam trưởng:</strong> Gam trưởng có đặc trưng là các nốt được sắp xếp theo một trật tự nhất định tạo ra cảm giác vui tươi, mạnh mẽ và tươi sáng. Gam trưởng bắt đầu từ nốt gốc và sử dụng các cung cách đều đặn, tạo nên sự ổn định trong âm nhạc.</p>

            <ul>
                <li><strong>Đô trưởng (C major):</strong> Do - Re - Mi - Fa - Sol - La - Si - Do. Đây là gam trưởng cơ bản nhất, không có dấu thăng hay giáng nào. Nó tạo cảm giác đơn giản và rõ ràng.</li>
                <li><strong>Sol trưởng (G major):</strong> Sol - La - Si - Do - Re - Mi - Fa# - Sol. Gam này có dấu thăng ở Fa, tạo ra một âm thanh sáng và mở rộng hơn gam Đô trưởng.</li>
                <li><strong>Fa trưởng (F major):</strong> Fa - Sol - La - Si giáng - Do - Re - Mi - Fa. Gam này có dấu giáng ở Si, tạo cảm giác ấm áp và đầy đặn, thích hợp cho các bản nhạc nhẹ nhàng và dễ chịu.</li>
                <li><strong>Đặc điểm của Gam trưởng:</strong> Các gam trưởng đều có một cấu trúc chung là: Bước đầu tiên (Do) đến bước thứ 2 (Re) cách nhau một cung, bước thứ 2 đến bước thứ 3 (Mi) cách một cung, và tiếp theo là các khoảng cách cố định khác. Mỗi bước đi trong gam trưởng tạo ra cảm giác cân bằng và tươi mới.</li>
            </ul>

            <p><strong>Gam thứ:</strong> Gam thứ thường mang đến cảm giác u sầu, nhẹ nhàng hoặc căng thẳng, tuỳ vào cách sử dụng. Gam thứ có một sự khác biệt nhỏ trong cách xây dựng so với gam trưởng, chủ yếu liên quan đến khoảng cách giữa các nốt trong cấu trúc của nó.</p>

            <ul>
                <li><strong>La thứ (A minor):</strong> La - Si - Do - Re - Mi - Fa - Sol - La. Đây là gam thứ cơ bản, không có dấu thăng hay giáng, mang lại cảm giác nhẹ nhàng, buồn bã, nhưng vẫn có sự cân bằng nhất định.</li>
                <li><strong>Mi thứ (E minor):</strong> Mi - Fa# - Sol - La - Si - Do - Re - Mi. Gam này có dấu thăng ở Fa, khiến cho nó có âm thanh mượt mà, dễ dàng chuyển tiếp vào các hợp âm khác, thường dùng trong các bản nhạc trữ tình hoặc u buồn.</li>
                <li><strong>Re thứ (D minor):</strong> Re - Mi - Fa - Sol - La - Si giáng - Do - Re. Gam này có dấu giáng ở Si, tạo ra âm sắc trầm và mang cảm giác u uất, thường thấy trong các thể loại nhạc cổ điển hoặc nhạc pop ballad.</li>
                <li><strong>Đặc điểm của Gam thứ:</strong> Gam thứ có sự thay đổi trong cấu trúc so với gam trưởng. Khoảng cách giữa bước thứ ba và thứ tư trong gam thứ thường có một nửa cung, tạo ra một âm thanh đậm đà và sâu sắc. Điều này dẫn đến cảm giác âm nhạc u ám hoặc huyền bí hơn.</li>
            </ul>

            <p><strong>Sự khác biệt giữa Gam trưởng và Gam thứ:</strong></p>
            <ul>
                <li>Gam trưởng thường mang lại cảm giác vui vẻ, ổn định, và mạnh mẽ, trong khi gam thứ có xu hướng tạo ra cảm giác buồn bã, căng thẳng hoặc u sầu.</li>
                <li>Gam trưởng được xây dựng dựa trên một chuỗi các cung lớn (trừ các khoảng cách nhỏ giữa các nốt thứ ba và thứ sáu), trong khi gam thứ có sự thay đổi về khoảng cách này, đặc biệt là sự giảm của cung lớn thành cung nhỏ.</li>
                <li>Chúng cũng có sự khác biệt trong cách sử dụng trong hợp âm: hợp âm trưởng thường tạo ra sự ổn định, trong khi hợp âm thứ mang đến một cảm giác không hoàn toàn ổn định và tạo ra sự khao khát hoặc chuyển tiếp.</li>
            </ul>

        </div>

        <div class="music-theory-content">
            <h2>Hóa Biến (Dấu Thăng, Dấu Giáng)</h2>
            <p>Hóa biến là một công cụ quan trọng trong âm nhạc, giúp thay đổi cao độ của nốt nhạc, tạo nên sự đa dạng và phong phú cho giai điệu và hòa âm. Các dấu hóa biến có thể thay đổi âm sắc của nốt nhạc, từ đó tạo ra các hiệu ứng âm nhạc khác nhau. Dưới đây là những khái niệm và ứng dụng cơ bản của hóa biến:</p>

            <ul>
                <li><strong>Dấu thăng:</strong> Là dấu hiệu được đặt trước một nốt nhạc để tăng cao độ của nó lên một nửa cung. Dấu thăng (♯) làm cho nốt nhạc trở nên cao hơn so với vị trí gốc của nó trong gam tự nhiên.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Fa</strong>, dấu thăng làm nó thành <strong>Fa♯</strong>, tương đương với âm thanh cao hơn nốt Fa một nửa cung.</li>
                    <li><strong>Các dấu thăng trong gam:</strong> Các dấu thăng được sử dụng để điều chỉnh nốt trong gam, chẳng hạn trong gam G major (Sol trưởng), dấu thăng có mặt ở nốt Fa, tạo thành Fa#.</li>
                </ul>

                <li><strong>Dấu giáng:</strong> Là dấu hiệu được đặt trước một nốt nhạc để giảm cao độ của nó xuống một nửa cung. Dấu giáng (♭) giúp làm giảm âm thanh của nốt xuống một nửa cung so với vị trí gốc của nó trong gam tự nhiên.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Si</strong>, dấu giáng sẽ làm nó thành <strong>Si♭</strong>, tương đương với âm thanh thấp hơn nốt Si một nửa cung.</li>
                    <li><strong>Các dấu giáng trong gam:</strong> Gam F major (Fa trưởng) sử dụng dấu giáng ở nốt Si (Si♭), giúp tạo ra âm thanh trầm và dễ chịu hơn.</li>
                </ul>

                <li><strong>Dấu thăng kép:</strong> Là dấu hiệu tăng hai nửa cung cho một nốt nhạc. Dấu thăng kép (𝄪) được sử dụng khi cần tăng âm thanh của nốt lên một cung trọn (tương đương với một thăng kép).</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Fa</strong>, dấu thăng kép sẽ biến nó thành <strong>Fa𝄪</strong>, tương đương với âm thanh cao hơn nốt Fa hai nửa cung, hoặc giống như nốt Sol.</li>
                    <li><strong>Công dụng:</strong> Dấu thăng kép thường được sử dụng trong các tác phẩm âm nhạc phức tạp, giúp tạo ra sự biến đổi mạnh mẽ trong giai điệu.</li>
                </ul>

                <li><strong>Dấu giáng kép:</strong> Là dấu hiệu giảm hai nửa cung cho một nốt nhạc. Dấu giáng kép (𝄫) được sử dụng khi cần giảm âm thanh của nốt xuống một cung trọn (tương đương với một giáng kép).</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Mi</strong>, dấu giáng kép sẽ biến nó thành <strong>Mi𝄫</strong>, tương đương với âm thanh thấp hơn nốt Mi hai nửa cung, hoặc giống như nốt Re.</li>
                    <li><strong>Công dụng:</strong> Dấu giáng kép giúp tạo ra sự biến chuyển về cao độ mạnh mẽ, thường thấy trong các hợp âm giảm hoặc trong những đoạn nhạc với cảm giác căng thẳng.</li>
                </ul>

                <li><strong>Dấu bình:</strong> Là dấu hiệu được sử dụng để hủy bỏ dấu thăng, dấu giáng hoặc dấu thăng kép đã áp dụng cho nốt nhạc. Dấu bình (♮) sẽ đưa nốt trở lại trạng thái tự nhiên của nó.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> Nếu bạn có nốt <strong>Fa#</strong> (Fa thăng), dấu bình sẽ biến nó trở lại nốt <strong>Fa</strong> tự nhiên, loại bỏ dấu thăng.</li>
                    <li><strong>Ứng dụng dấu bình:</strong> Dấu bình rất quan trọng trong việc điều chỉnh và đưa các nốt nhạc về lại trạng thái chuẩn của chúng trong một tác phẩm âm nhạc.</li>
                </ul>
            </ul>

            <h3>Ứng dụng của hóa biến trong âm nhạc</h3>
            <p>Hóa biến có vai trò quan trọng trong việc tạo ra những sắc thái khác biệt cho bản nhạc. Khi sử dụng đúng cách, chúng có thể thay đổi toàn bộ cảm xúc và màu sắc của một giai điệu. Dưới đây là một số ứng dụng cụ thể:</p>

            <ul>
                <li><strong>Điều chỉnh tông của gam:</strong> Hóa biến có thể thay đổi tông của một bản nhạc. Ví dụ, trong gam A minor, nếu bạn sử dụng dấu thăng ở nốt Sol (Sol#), bạn có thể tạo ra một chuyển động về hợp âm trưởng (A major) mà không phải thay đổi toàn bộ cấu trúc của gam.</li>

                <li><strong>Thể hiện sự thay đổi âm điệu trong giai điệu:</strong> Dấu thăng hoặc dấu giáng có thể thay đổi âm điệu của một giai điệu, tạo ra cảm giác khác biệt giữa các đoạn nhạc. Ví dụ, trong một đoạn nhạc có cảm giác vui vẻ, bạn có thể thêm dấu thăng để tạo ra một cảm giác sáng sủa hơn.</li>

                <li><strong>Thêm tính linh hoạt trong hòa âm:</strong> Hóa biến có thể làm cho các hợp âm trở nên phức tạp và phong phú hơn. Hợp âm C7 (Do 7) có thể chuyển thành C7♯9 hoặc C7♭13 với sự kết hợp của các dấu thăng và giáng, làm tăng tính thẩm mỹ và sự đa dạng của hòa âm.</li>

                <li><strong>Cải thiện sự mượt mà giữa các đoạn nhạc:</strong> Dấu bình có thể giúp tạo ra sự chuyển tiếp mượt mà giữa các nốt trong một tác phẩm, tránh sự "gian lận" âm thanh và giúp các đoạn nhạc chảy trôi tự nhiên hơn.</li>
            </ul>

            <h3>Các loại hóa biến khác và ứng dụng</h3>
            <p>Có một số loại hóa biến khác không được sử dụng phổ biến nhưng cũng có vai trò quan trọng trong việc tạo ra các hiệu ứng âm nhạc độc đáo:</p>

            <ul>
                <li><strong>Dấu thăng nhạc cổ điển (Tritone Substitution):</strong> Đây là dấu thăng sử dụng trong các hợp âm jazz, nơi một hợp âm có thể thay thế bằng một hợp âm cách nó một quãng ba hoặc ba cung.</li>

                <li><strong>Dấu thăng tự nhiên (Natural Sign):</strong> Dấu này không phải là một dấu hóa biến chính thức nhưng có thể xuất hiện trong các bản nhạc để chỉ ra rằng nốt trước đó đã bị thay đổi, và giờ đây nốt này trở lại trạng thái ban đầu.</li>
            </ul>
        </div>

        <div class="music-theory-content">
            <h2>Điệu Thức</h2>
            <p>Điệu thức là một khái niệm quan trọng trong âm nhạc, chỉ sự tổ chức các nốt nhạc trong một hệ thống nhất định, tạo ra các sắc thái cảm xúc và tinh thần cho một tác phẩm âm nhạc. Mỗi điệu thức có một cấu trúc âm nhạc riêng, từ đó quyết định cảm giác mà bản nhạc truyền tải. Các điệu thức có thể chia thành điệu thức trưởng (major) và điệu thức thứ (minor), cùng với các biến thể khác như điệu thức hòa thanh, điệu thức tiết tấu, điệu thức lưỡng tính, v.v.</p>

            <h3>Điệu Thức Trưởng (Major Mode)</h3>
            <p>Điệu thức trưởng tạo ra một cảm giác vui vẻ, sáng sủa và mạnh mẽ. Nó được xây dựng dựa trên một chuỗi các nốt nhạc với các khoảng cách xác định. Điệu thức trưởng có cấu trúc giữa các nốt theo một chuỗi cung – nửa cung như sau:
                <code>Do – Re – Mi – Fa – Sol – La – Si – Do</code>. Mỗi nốt trong điệu thức trưởng mang một sắc thái tươi vui, lạc quan.
            </p>

            <ul>
                <li><strong>Ví dụ:</strong> <em>Do trưởng (C Major)</em> – Do, Mi, Sol, Do (nốt cơ bản tạo thành hợp âm trưởng).</li>
                <li><strong>Ví dụ trong âm nhạc:</strong> Một trong những bài hát nổi tiếng sử dụng điệu thức trưởng là "Ode to Joy" của Beethoven, với một giai điệu vui tươi, mạnh mẽ.</li>
                <li><strong>Điệu thức trưởng trong các hợp âm:</strong> Các hợp âm trong điệu thức trưởng thường là các hợp âm chính (I), hợp âm phụ (IV), và hợp âm thứ (V). Ví dụ, trong C Major, hợp âm I là C, IV là F và V là G.</li>
            </ul>

            <h3>Điệu Thức Thứ (Minor Mode)</h3>
            <p>Điệu thức thứ thường mang đến cảm giác buồn bã, u sầu hoặc đầy cảm xúc nội tâm. Điệu thức thứ được tạo ra từ một chuỗi các nốt nhạc với các khoảng cách khác với điệu thức trưởng. Cấu trúc giữa các nốt trong điệu thức thứ như sau: <code>Do – Re – Đố – Fa – Sol – La – Si – Do</code>, với khoảng cách giữa các nốt khác biệt, khiến cho nó tạo ra cảm giác u tối, sâu lắng.</p>

            <ul>
                <li><strong>Ví dụ:</strong> <em>La thứ (A Minor)</em> – La, Do, Mi, La (nốt cơ bản tạo thành hợp âm thứ).</li>
                <li><strong>Ví dụ trong âm nhạc:</strong> Một ví dụ điển hình cho điệu thức thứ là "The Sound of Silence" của Simon & Garfunkel, sử dụng điệu thức thứ để tạo nên không khí trầm tư, u ám.</li>
                <li><strong>Điệu thức thứ trong các hợp âm:</strong> Trong điệu thức thứ, hợp âm I là hợp âm thứ, hợp âm IV là hợp âm trưởng và hợp âm V thường là hợp âm thứ hoặc hợp âm tăng. Ví dụ, trong A Minor, hợp âm I là Am, IV là Dm, V là E (hoặc E7).</li>
            </ul>

            <h3>Các Điệu Thức Khác</h3>
            <p>Bên cạnh điệu thức trưởng và điệu thức thứ, còn có một số điệu thức khác được sử dụng trong âm nhạc, mỗi điệu thức tạo ra một cảm giác khác biệt cho bản nhạc:</p>

            <ul>
                <li><strong>Điệu thức Hòa Thanh (Harmonic Minor Mode):</strong> Điệu thức hòa thanh được xây dựng từ điệu thức thứ nhưng có sự thay đổi ở nốt thứ 7, với mục đích tạo ra sự tăng cường trong cảm giác căng thẳng và giải quyết. Cấu trúc của điệu thức hòa thanh là <code>Do – Re – Đố – Fa – Sol – La – Si# – Do</code>.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> <em>La hòa thanh thứ (A Harmonic Minor)</em> – La, Do, Mi, Fa, Sol, La, Si#, La.</li>
                    <li><strong>Ví dụ trong âm nhạc:</strong> Điệu thức hòa thanh thứ thường xuất hiện trong âm nhạc cổ điển và nhạc jazz để tạo ra sự căng thẳng mạnh mẽ. Ví dụ, trong một tác phẩm của Mozart hoặc Bach, điệu thức hòa thanh thứ được dùng để tạo sự chuyển tiếp mạnh mẽ giữa các hợp âm.</li>
                </ul>

                <li><strong>Điệu thức Dorian:</strong> Là một điệu thức thứ nhưng có đặc điểm đặc biệt là nốt thứ 6 tự nhiên, không bị giảm như trong điệu thức thứ tự nhiên. Cấu trúc của điệu thức Dorian là <code>Do – Re – Đố – Fa – Sol – La – Si – Do</code>.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> <em>Re Dorian</em> – Re, Mi, Fa, Sol, La, Si, Do, Re.</li>
                    <li><strong>Ví dụ trong âm nhạc:</strong> Điệu thức Dorian được sử dụng trong nhiều thể loại, đặc biệt trong jazz và nhạc blues, vì tính linh hoạt của nó giữa cảm giác thứ và cảm giác trưởng. Một ví dụ điển hình là bài "Scarborough Fair" của Simon & Garfunkel, sử dụng điệu thức Dorian để tạo ra sự mơ hồ.</li>
                </ul>

                <li><strong>Điệu thức Phrygian:</strong> Là điệu thức thứ có đặc điểm là nốt thứ 2 giảm, tạo ra một cảm giác đặc biệt ma mị và tối tăm. Cấu trúc của điệu thức Phrygian là <code>Do – Đố – Re – Fa – Sol – La – Si – Do</code>.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> <em>Mi Phrygian</em> – Mi, Fa, Sol, La, Si, Do, Re, Mi.</li>
                    <li><strong>Ví dụ trong âm nhạc:</strong> Điệu thức Phrygian được sử dụng để tạo ra cảm giác kỳ bí và u ám. Nó xuất hiện trong nhiều tác phẩm nhạc metal, đặc biệt là trong các thể loại như death metal hoặc doom metal.</li>
                </ul>

                <li><strong>Điệu thức Mixolydian:</strong> Là điệu thức trưởng nhưng có nốt thứ 7 giảm, tạo ra một cảm giác mở và thoải mái nhưng vẫn mang một chút sắc thái khác biệt so với điệu thức trưởng. Cấu trúc của điệu thức Mixolydian là <code>Do – Re – Mi – Fa – Sol – La – Si♭ – Do</code>.</li>
                <ul>
                    <li><strong>Ví dụ:</strong> <em>Sol Mixolydian</em> – Sol, La, Si, Do, Re, Mi, Fa, Sol.</li>
                    <li><strong>Ví dụ trong âm nhạc:</strong> Điệu thức Mixolydian rất phổ biến trong nhạc blues, rock và jazz. Một ví dụ tiêu biểu là bài "Sweet Home Alabama" của Lynyrd Skynyrd, sử dụng điệu thức Mixolydian để tạo ra cảm giác tự do và phóng khoáng.</li>
                </ul>
            </ul>
        </div>
    </div>

    <script>
        function showMusicTheoryContent(index) {
            let contents = document.querySelectorAll('.music-theory-content');
            let tabs = document.querySelectorAll('.music-theory-tab');

            for (let i = 0; i < contents.length; i++) {
                contents[i].classList.remove('active');
                tabs[i].classList.remove('active');
            }

            contents[index].classList.add('active');
            tabs[index].classList.add('active');
        }
    </script>

</body>

</html>