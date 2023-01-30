
const wantedPath = "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
const bPath = "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
const careerData = [
    {
        id: 1 , img_path : "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F1919%2Fc852ce1a.jpg&w=1200&q=90",
        title: "데이터가 흐르는 회사 만들기 with 앰플리튜드 - 박풀잎", content: `나에게 일이란 금전적 보상만으로도 충분한 가치를 주는지, 아니면 더 큰 충만함을 주는 다른 무언가가 있는지 생각해 본 적 있나요? 이러한 질문을 던지고,
        스스로 답을 쌓아 간다면 다음 스텝을 고민하는 기준이 될 수 있을 것입니다.`,
        logo_img: wantedPath, career_id : 1,logo_name: "Wnated",
    },
    {
        id: 2 , img_path : "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220401%2F8%2F07327190.jpg&w=750&q=100",
        title: "커리어 갈림길에서 질문을 던지다", content: `데이터 조직이 아니더라도 데이터를 중요하게 살펴봐야 하는 이유는 무엇일까요?원티드랩 마케팅팀의 데이터 활용 사례를 공유합니다.`,
        logo_img: wantedPath, career_id : 5, logo_name: " Wanted",
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
    {
        id: 3 , img_path : "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F7SUi%2Fimage%2FtFUTuN7ICl6QWaAZvfJYqDL1ZT4.jpg&w=750&q=100",
        title: "이번 생은 N잡러", content: `회사에서 겸업에 대한 논의가 뜨겁습니다. 회사를 다니면서 카페를 하면 겸업일까요? 아닐까요? 본인의 재능으로 수익을 창출하는 것은 어떨까요? 회사가 인생을 책임져 줄 수 없는 시대입니다. 그렇기 때문에 많은 사람들이 N잡러를 꿈꾸고 있습니다. 아이패드 드로잉으로 N잡러가 된 한승현 작가님의 '이번 생은 N잡러'의 삶에 도움이 되는 이야기들을 적어봅니다.  `,
        logo_img: bPath, career_id : 2, logo_name: "책인사"
    },
]

export default careerData