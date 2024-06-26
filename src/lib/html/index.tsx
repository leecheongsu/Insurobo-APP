import { commonCssHtml } from '@app/style/commonCss';
import { defaultCssHtml } from '@app/style/defaultCss';
const commonCss = commonCssHtml();
const defaultCss = defaultCssHtml();

export const homeInfoText = () => {
  const html = `
  <html>
  <head>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
  <style type="text/css">
    ${commonCss}
    ${defaultCss}
  </style>
  </head>
  <body>
    <div class="modal-content">
      <div class="content">
       <h2>인슈로보-현대해상 풍수해VI 보험</h2>
      <div class="con-txt">
          현대해상 오픈API 서버 점검으로 인해 서비스가 원활하지 않을 수 있습니다.
          * 서버 점검 일시 : 2021년 5월 28일 16:00 ~ 
      </div>
      </div>
      </div>
  </body>
  </html>
    `;
  return html;
};

export const danchInfoText = () => {
  const html = `
  <html>
  <head>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
  <style type="text/css">
    ${commonCss}
    ${defaultCss}
  </style>
  </head>
  <body>
    <div class="modal-content">
      <div class="content">
       <h2>화재보험 가입 건</h2>
      <div class="con-txt">
          관리사무소 등을 통해 단체로 가입되어 있는 건물이라면 ‘화재보험 가입 건’을 선택하세요.
      </div>
      <h2>화재보험 미가입 건</h2>
      <div class="con-txt">
          관리사무소 등을 통해서 단체로 가입되어 있지 않은 건물이라면 ‘화재보험 미가입 건’을 선택하세요.
      </div>
      </div>
      </div>
  </body>
  </html>
    `;
  return html;
};

export const selectDamboText = () => {
  const html = `
  <html>
  <head>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
  <style type="text/css">
    ${commonCss}
    ${defaultCss}
  </style>
  </head>
  <body>
  <div class="modal-content">
  <div class="content">
      <h2>급배수누출손해</h2>
      <div class="con-txt">
          급배수 시설이 우연한 사고로 인해 누수 또는 방수 됨에 따라 건물에 대한 직접 손해를 보상합니다.
          <div class="info-txt2 bk">단, 급배수시설 자체의 손해(교체비용, 수리비용 등)는 제외되고, 스프링클러 및 기타 장치는 급배수 시설에 포함하지 않습니다.</div>
      </div>
      <h2>유리 손해</h2>
      <div class="con-txt">
          건물에 부착되어 있는 판유리에 생긴 파손의 손해를 보상합니다.
      </div>
      <h2>대물배상책임</h2>
      <div class="con-txt">
          보험계약자 건물로 인해 타인의 건물에 손해를 가했을 경우에 대한 책임을 보상합니다.
      </div>
      <div class="info-txt2 bk">기타 자세한 정보는 약관을 통해 확인하실 수 있습니다.</div>
  </div>
  </div>
  </body>
  </html>
    `;
  return html;
};

export const gajeDamboText = () => {
  const html = `
  <html>
  <head>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
  <style type="text/css">
    ${commonCss}
    ${defaultCss}
  </style>
  </head>
  <body>
  <div class="modal-content">
  <div class="content">
      <h2>급배수누출손해</h2>
      <div class="con-txt">
          급배수 시설이 우연한 사고로 인해 누수 또는 방수 됨에 따라 건물에 대한 직접 손해를 보상합니다.
          <div class="info-txt2 bk">단, 급배수시설 자체의 손해(교체비용, 수리비용 등)는 제외되고, 스프링클러 및 기타 장치는 급배수 시설에 포함하지 않습니다.</div>
      </div>
      <h2>가재 도난</h2>
      <div class="con-txt">
      보험가입 건물 구내에서 강도 또는 절도(그 미수 포함)로 생긴 도난, 훼손 또는 망가진 손해를 보상합니다.
      </div>
      <h2>잠금장치</h2>
      <div class="con-txt">
      도난 손해 발생 시 도어록 잠금 장치 교체 비용에 대해 보상합니다.
      </div>
      <div class="info-txt2 bk">기타 자세한 정보는 약관을 통해 확인하실 수 있습니다.</div>
  </div>
  </div>
  </body>
  </html>
    `;
  return html;
};

export const gunmulText = () => {
  const html = `
    <html>
    <head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
    <style type="text/css">
      ${commonCss}
      ${defaultCss}
    </style>
    </head>
    <body>
    <div class="modal-content">
        <div class="content">
            토지에 정착하는 공작물 중 지붕과 기둥 또는 지붕과 벽이 있는 것으로 주거, 작업, 저장 등의 용도를 위하여 인공적으로 축조된 건조물로써 아래의 물건은 다른 약정이 없으면 보험의 목적에 포함됩니다.
            <div class="info-txt2 bk">가. 건물의 부속물 : 피보험자 소유인 칸막이, 대문, 담, 곳간 및 이와 비슷한 것</div>
            <div class="info-txt2 bk">나. 건물의 부착물 : 피보험자 소유인 간판, 네온싸인, 안테나, 선전탑 및 이와 비슷한 것</div>
            <div class="info-txt2 bk">다. 건물의 부속설비 : 피보험자 소유인 전기, 가스, 난방, 냉방설비 및 이와 비슷한 것</div>
        </div>
    </div>
    </div>
    </body>
    </html>
      `;
  return html;
};

export const jipgiText = () => {
  const html = `
      <html>
      <head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
      <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
      <style type="text/css">
        ${commonCss}
        ${defaultCss}
      </style>
      </head>
      <body>
      <div class="modal-content">
        <div class="content">
            <ul class="ul-type">
                <li>시설(일반물건) – 사용용도 및 각종 영업행위에 적합하도록 건물 골조의 벽, 천정, 바닥 등에 치장설치하고 내외부 마감제나 조명시설 및 부대시설로서 건물의 구조체에 영향을 미치지 않고 재설치가 가능한 것</li>
                <li>기계(공장물건) – 물리량을 변경하거나 전달하는 유용한 장치 또는 연소장치, 냉동장치, 전해장치 등 기계의 효용을 이용하여 전기적 또는 화학적 효과를 발생시키는 구조물</li>                    
                <li>집기비품 – 일반적으로 건물에 고정되어 있지 않고 쉽게 움직임이 가능한 냉장고, 세탁기, 책상, 컴퓨터 등</li>
            </ul>
            <div class="h-top2">
                <div class="info-txt2 bk">집기비품은 시설(일반물건) 또는 기계(공장물건) 가입금액에 포함됩니다.</div>
            </div>
        </div>
        </div>
      </div>
      </body>
      </html>
        `;
  return html;
};

export const jegoJasanText = () => {
  const html = `
        <html>
        <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
        <style type="text/css">
          ${commonCss}
          ${defaultCss}
        </style>
        </head>
        <body>
        <div class="modal-content">
        <div class="content">
            원부재료, 재공품, 반제품, 제품, 부산물, 상품과 저장품 및 이와 비슷한 것
        </div>
        </div>
        </body>
        </html>
          `;
  return html;
};

export const jagibudamText = () => {
  const html = `
          <html>
          <head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
          <style type="text/css">
            ${commonCss}
            ${defaultCss}
          </style>
          </head>
          <body>
          <div class="modal-content">
        <div class="content">
            보험사고 발생 시, 보상받는 보험금에서 공제되는 금액입니다.
        </div>
    
        </div>
          </body>
          </html>
            `;
  return html;
};

export const individualTerms = () => {
  const html = `
  <html>
  <head>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
  <style type="text/css">
    ${commonCss}
    ${defaultCss}
  </style>
  </head>
  <body>

<!-- skipnav -->
<div id="skip">
	<a href="#content">본문 바로가기</a>
	<a href="#gnb">주메뉴 바로가기</a>
</div>
<!-- //skipnav -->

<!-- wrap -->
<div id="wrap" class="pop">

	<!-- container -->
	<div id="container">

		<!-- content -->
		<div id="content">
			<div class="cont-inner">                
                <div class="term">
                    <h1>개인정보처리방침</h1>
                    <div class="in-txt">
                        ㈜인슈로보(이하 '회사'라 한다.)는 인슈로보 앱 서비스(이하 "서비스"라 한다.)를 제공함에 있어 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 "정보통신망법"이라 한다.), 개인정보보호법, 인용정보 이용 및 보호에 관한 법률 등 개인정보 보호 법령을 철저히 준수하면 관련 법규에 의거한 개인정보취급방침을 다음과 같이 두고 있습니다.
                        회사는 개인정보취급방침을 개정하는 경우 회사가 운영하는 사이트(이하 "사이트"라 한다.) 혹은 서비스의 공지사항(또는 개별공지)를 통해 공지할 것입니다.
                    </div>
                    <h2>1. 수집하는 개인정보의 항목과 이용목적</h2>                    
                    <ol class="ol-type2">
                        <li>1.1 회사는 회원가입, 고객상담, 각종 서비스 등 기본적인 서비스를 위한 필수정보와 고객 맞춤 서비스 제공을 위한 선택정보로 구분하여 아래와 같은 개인정보를 수집하고 있습니다. 수집한 개인정보는 서비스 제공 기간 동안 보유합니다.            
                            <div class="tbl">
                                <table>
                                    <colgroup>
                                        <col style="width:15%">
                                        <col style="width:45%">
                                        <col style="width:40%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>수집항목</th>
                                            <th>이용목적</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>필수<br>수집</th>
                                            <td>이메일 주소, 비밀번호 또는 Facebook ID, Google ID, Kakao ID, Naver ID 등 가입을 위해 필요한 제휴 서비스 계정</td>
                                            <td>
                                                <ul class="dep3">
                                                    <li>서비스 제공을 위한 회원가입 및 관리</li>
                                                    <li>서비스 이용에 따른 민원사항 처리</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>필수<br>수집</th>
                                            <td>SMS(MMS), 스마트폰 알림(푸시 알림), 고객의 수기 입력, 금융사(카드사/은행사/보험사/증권사 등) 또는 국세청 ID/비밀번호, 공인인증서 비밀번호 입력을 통해 수집하는 회원 보유 금융상품 정보(금융사,금융상품명, 수시입출금/대출/보험/펀드 등의 금융상품 종류, 계좌번호, 신용/체크카드 번호) 및 신용정보, 계좌 잔액, 입출금내역, 카드 결제 내역, 구매품목정보, 카드 이용한도, 단기카드대출 이용 내역 및 한도, 카드론 이용 내역 및 한도, 보유 카드포인트 내역, 대출 정보 등의 회원 금융 거래 정보</td>
                                            <td>
                                                <ul class="dep3">
                                                    <li>보유금융상품과 거래내용 서비스 제공</li>
                                                    <li>자산관리와 재무계획 서비스 제공</li>
                                                    <li>개별 맞춤형 금융상품 비교와 추천 정보 제공</li>
                                                    <li>신용점수와 등급 등 고객 신용정보와 신용등급 관리를 위한 정보제공</li>
                                                    <li>안정적인 서비스 운영 및 제공을 위한 안전성 테스트 및 모니터링</li>
                                                    <li>기타 고객에게 유익하다고 판단되는 정보의 제공</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>필수<br>수집</th>
                                            <td>이름, 생년월일, 성별, 내외국인 정보, 이동통신사 및 휴대폰번호, 아이핀 등을 통한 본인 인증시 수집되는 CI/DI값 등 회원 본인 확인을 위해 필요한 식별자 정보</td>
                                            <td> 본인 인증 및 확인</td>
                                        </tr>
                                        <tr>
                                            <th>필수<br>수집</th>
                                            <td>이름, 생년월일, 휴대폰번호, 이메일, 주소, 보험계약정보, 계약자, 피보험자, 결제정보, 건물정보 등의 고객 보험계약정보 세부내역</td>
                                            <td>
                                                <ul class="dep3">
                                                    <li>보험계약 조회</li>
                                                    <li>보험계약 유지와 관리</li>
                                                    <li>보험금청구 서비스 제공</li>
                                                    <li>민원처리 및 분쟁대응</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>필수<br>수집</th>
                                            <td>이름, 상품 구매/취소/반품/교환/환불 정보, 수령인 정보, 결제 정보, 송장 정보, 은행계좌정보, 휴대폰번호, 신용카드정보, 현금영수증 정보</td>
                                            <td>금융 및 금융 외 상품 주문, 결제 및 배송서비스 제공</td>
                                        </tr>
                                        <tr>
                                            <th>필수<br>수집</th>
                                            <td>이름, 생년월일, 성별, 이메일, 비밀번호, 휴대폰번호, 회사명(제휴사), 지점명, 지점주소, 직책 등 영업회원 및 제휴사 정보</td>
                                            <td>
                                                <ul class="dep3">
                                                    <li>영업회원을 위한 개별 서비스 정보제공</li>
                                                    <li>제휴사 실적 관리를 위한 정보제공</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>선택<br>수집</th>
                                            <td>주거형태, 소득정보, 직장, 직종, 거주지역 등 통계학적 정보</td>
                                            <td>
                                                <ul class="dep3">
                                                    <li>이벤트, 뉴스레터, 매거진, 맞춤형 금융 혜택과 정보제공 등 서비스 이용성 증대를 위한 선택 수집</li>
                                                    <li>마케팅 활용</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>1.2 회사는 비회원 주문일 때에도 본인 인증 및 확인, 보험계약 조회/유지/관리, 보험금청구, 민원처리 및 분쟁대응에 필요한 개인정보만을 요청합니다. 이때 해당 정보는 대금결제 및 상품의 배송과 관련된 용도로 사용되며 그 밖의 용도로는 절대 사용되지 않습니다. 비회원으로 서비스를 이용할 때에는 회원에게만 적용되는 사항을 제외한 나머지 부분에 대해서는 회원과 동일하게 개인정보처리방침이 적용됩니다.(개인정보 보유 및 이용기간 등)
                            <div class="tbl">
                                <table>
                                    <colgroup>
                                        <col style="width:15%">
                                        <col style="width:45%">
                                        <col style="width:40%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>수집항목</th>
                                            <th>이용목적</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th rowspan="2">필수<br>수집</th>
                                            <td>이름, 생년월일, 성별, 내외국인 정보, 이동통신사 및 휴대폰번호, 아이핀 등을 통한 본인 인증시 수집되는 CI/DI값 등 회원 본인 확인을 위해 필요한 식별자 정보</td>
                                            <td> 본인 인증 및 확인</td>
                                        </tr>
                                        <tr>
                                            <td class="bl">이름, 생년월일, 휴대폰번호, 이메일, 주소, 보험계약정보, 계약자, 피보험자, 결제정보, 건물정보 등의 고객 보험계약정보 세부내역</td>
                                            <td>
                                                <ul class="dep3">
                                                    <li>보험계약 조회</li>
                                                    <li>보험계약 유지와 관리</li>
                                                    <li>보험금청구 서비스 제공</li>
                                                    <li>민원처리 및 분쟁대응</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>1.3 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
                            <ul class="dep2">
                                <li>1.3.1 IP address, Cookies, 방문일시, 서비스 이용기록, 기기정보(디바이스, OS 등) 결제기록, 접속기록 등</li>
                                <li>1.3.2 위의 정보들을 토대로 서비스 제공 계약의 이행, 요금 정산, 신규서비스를 위한 고객 통계자료, 마케팅, 고객대응 활동 등을 수행합니다. 다만, 이용자는 웹 브라우저의 옵션을 조정하여 모든 Cookies를 거부할 수 있습니다. 방법은 아래와 같습니다.
                                    <ul class="dep3">
                                        <li>[도구] -> [인터넷옵션] 선택</li>
                                        <li>[개인정보] 탭 선택</li>
                                        <li>[개인정보 설정수준을 사용자 조정</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <h2>2.개인정보 보유 및 이용 기간</h2>

                    <ol class="ol-type2">
                        <li>2.1 개인정보는 고객의 서비스의 이용 기간에만 활용되며, 회원 탈퇴시 지체없이 파기합니다. 단, 내부 방침에 의해 고객에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 아래와 같이 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
                            <ul class="dep2">
                                <li>2.1.1 계약 또는 청약철회 등에 관한 기록보유 : 5년(전자상거래 등에서의 소지자보호에 관한 법률)</li>
                                <li>2.1.2 대금 결제 및 재화 등의 공급에 관한 기록보유 : 3년(전자상거래 등에서의 소지자보호에 관한 법률)</li>
                                <li>2.1.3 소비자 불만 또는 분쟁 처리에 관한 기록 보유 : 3년(전자상거래 등에서의 소비자보호에 관한 법률)</li>
                                <li>2.1.4 본인확인에 관한 기록 보유 : 6개월(정보통신망 이용촉진 및 정보보호 등에 관한 법률)</li>
                                <li>2.1.5 신용정보의 수집/처리 및 이용 등에 관한 기록 : 1년(신용정보의 이용 및 보호에 관한 법률)</li>
                                <li>2.1.6 건당 1만원 이하의 전자금융거래 기록 : 1년(전자금융거래법)</li>
                                <li>2.1.7 건당 1만원 초과의 전자금융거래 기록 : 5년(전자금융거래법)</li>
                                <li>2.1.8 웹사이트와 모바일 어플리케이션 방문에 관한 기록 보유 : 3개월(통신비밀보호법)</li>
                            </ul>
                        </li>
                        <li>2.2 불법 행위 방지를 위한 보유
                            <div class="dep2">
                                반복적인 회원 탈퇴와 재가입으로 경제적 이익 취득 등 불법적인 행위를 차단하기 위해 문제시되는 개인정보(회원 ID등)는 회원 탈퇴 후 1년간 보유할 수 있다.
                            </div>
                        </li>    
                    </ol>
                    <h2>3.개인정보 파기 절차 및 방법</h2>
                    <div class="in-txt">회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기하며 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며 문서 등 종이에 출력된 개인정보는 분쇄기로 파기합니다. 단, 관계 법령에 의한 사유에 해당하는 경우 일정기간 저장된 후 파기됩니다.</div>
                    <h2>4.개인정보의 제3자 제공</h2>
                    <div class="in-txt">필수적으로 필요한 경우 주의를 기울여 아래 대상자에게 개인정보를 제공합니다.</div>
                    <ol class="ol-type2 h-top">
                        <li>4.1 서비스 사용자
                            <div class="type-in">회사의 서비스 사용 중 고객의 금융 소비내역 및 고객이 선택적으로 입력한 기타정보가 연결된 회원 간에 공개될 수 있습니다. 또한 고객이 상대방을 초대하거나 친구로 등록하는 경우, 설정에 따라 초대자 혹은 친구 식별을 위해 이름, 프로필 사진 일부 소비내역 정보가 피초대자에게 공개될 수 있습니다.</div>
                        </li>
                        <li>4.2 제휴사(영업회원)
                            <div class="type-in">보다 나은 서비스를 제공하기 위해 고객의 개인정보를 제휴사(영업회원)에게 제공하거나 공유할 수 있습니다. 개인정보를 제휴사에게 공유할 경우에는 사전에 고객에게 제휴사면(영업회원명)과 제공 또는 공유 정보, 사유, 공유 기간 등을 개별적으로 전자우편, SMS, 모바일 웹과 어플리케이션 등을 통하여 고지하고 동의를 구하는 절차를 거칩니다. 고객께서 동의하지 않는 경우에는 제휴사(영업회원)에게 정보를 제공하거나 공유하지 않습니다. 제휴관계에 변화가 있거나 제휴관계가 종료될 시에도 같은 절차에 따라 고지하거나 동의를 구합니다.</div>
                        </li>
                        <li>4.3 회사는 서비스 제공을 위해 회원의 동의를 얻는 등 적극적이고 적법한 절차를 토하여 아래와 같이 개인정보를 제공할 수 있습니다.
                            <div class="tbl">
                                <table>
                                    <colgroup>
                                        <col style="width:25%">
                                        <col style="width:75%">
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>제공<br>받는자</th>
                                            <td>영업회원</td>
                                        </tr>
                                        <tr>
                                            <th>정보<br>이용<br>목적</th>
                                            <td>
                                                <ul class="dep3">
                                                    <li>보험금 청구대행 </li>
                                                    <li>가입된 금융정보 조회 </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>제공<br>항목</th>
                                            <td>
                                                이름, 생년월일, 성별, 휴대폰번호, <br />
                                                내외국인구분, 중복가입확인정보, <br />
                                                본인확인정보, 보험계약정보, <br />
                                                보험사고정보(사고일, 경위 등) <br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>보유<br>기간</th>
                                            <td>제공 동의 철회 전까지</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ol>    
                    <h2>5. 고객 및 법정대리인의 권리와 행사 방법</h2>   
                    <ol class="ol-type2">
                        <li>5.1 개인정보의 열람 및 수정 요청
                            <div class="type-in">
                                고객 및 법정대리인은 언제든지 등록되어 있는 본인의 개인정보를 조회, 수정할 수 있습니다. 이용자는 개인정보의 조회, 수정을 위하여 서비스에 등록된 정보를 클릭하거나 설정 메뉴에 접근하여 계정 정보 등 등록된 개인정보를 직접 열람하거나 수정할 수 있습니다.
                            </div>
                        </li>
                        <li>5.2 개인정보의 삭제(회원탈퇴)
                            <div class="type-in">
                                고객이 회원탈퇴를 원하는 경우 개인정보관리담당자에게 서면 또는 이메일로 연락하시면 지체없이 조치를 취하겠습니다.
                            </div>
                        </li>
                    </ol>
                    <h2>6. 개인정보보호를 위한 기술 및 관리적 대책</h2>
                    <ol class="ol-type2">
                        <li>6.1 기술적 대책
                            <div class="type-in">
                                해킹 등의 외부침입에 대비하여 각 서버마다 침입차단시스템 등을 이용하여 보안에 만전을 기하고 있습니다. 이용자의 개인정보는 비밀번호에 의해 보호되며 중요한 데이터는 암호화 알고리즘에 의해 보호되고 있습니다.
                            </div>
                        </li>
                        <li>6.2 관리적 대책
                            <ul class="dep2">
                                <li>6.2.1 개인 정보 접근 권한을 최소한의 인원으로 제한
                                    <div class="type-in">
                                        회사는 개인정보관련 취급 직원을 담당자에 한정시키고 있으며 개인 정보에 접근을 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있습니다.
                                    </div>
                                </li>
                                <li>6.2.2 개인정보 관리 관련 내부 교육 강화
                                    <div class="type-in">
                                        회사는 내부 직원에 대한 수시 교육을 통하여 회사의 개인정보취급방침의 준수를 항상 강조하고 있습니다. 또한 신규직원 채용시 정보보호서약서에 서명하게 함으로써 직원에 의한 정보유출을 사전에 방지하고 개인정보 취급방침에 대한 이행사항 및 직원 준수여부를 감시하기 위해 내부 절차를 마련하여 지속적으로 시행하고 있습니다.
                                    </div>
                                </li>
                                <li>6.2.3 개인정보보호전담기구의 운영
                                    <div class="type-in">
                                        회사는 사내 개인정보보호전담기구 등을 통하여 회사의 개인정보취급방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로잡을 수 있도록 노력하고 있습니다.
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <h2>7. 고객의 권리와 의무</h2>
                    <div class="in-txt">회사는 타인의 이메일 주소, Facebook 등 제휴업체 ID 또는 기타 개인정보를 도용하여 회원가입 한 자 또는 서비스를 이용한 자를 발견한 경우 지체없이 해당 아이디에 대한 서비스 이용 정지 또는 회원탈퇴 등 필요한 조치를 취합니다.</div>
                    <h2>8. 개인정보관리책임자 및 담당자 안내</h2>
                    <ul class="ul-type">
                        <li>회사는 고객의 개인정보 관련 문의사항 및 불만 처리 등을 위하여 아래와 같이 개인정보 관리 책임자 및 담당자를 지정하고 있습니다.
                            <div class="tbl">
                                <table>
                                    <colgroup>
                                        <col style="width:20%">
                                        <col style="width:40%">
                                        <col style="width:40%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>개인정보보호담당자</th>
                                            <th>개인정보보호책임자</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>성명</th>
                                            <td>이청수</td>
                                            <td>서민</td>
                                        </tr>
                                        <tr>
                                            <th>소속 및<br>직위</th>
                                            <td>㈜인슈로보 사원</td>
                                            <td>㈜인슈로보 대표</td>
                                        </tr>
                                        <tr>
                                            <th>이메일</th>
                                            <td>info@insurobo.co.kr</td>
                                            <td>info@insurobo.co.kr</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>개인정보 침해에 대한 피해구제 또는 상담이 필요한 이용자께서는 아래 기관에 문의하여 주시기바랍니다.
                            <div class="tbl">
                                <table>
                                    <colgroup>
                                        <col style="width:30%">
                                        <col style="width:25%">
                                        <col style="width:45%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>기관</th>
                                            <th>연락처</th>
                                            <th>홈페이지</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>개인정보<br>침해신고센터</td>
                                            <td>(국번없이)<br>118</td>
                                            <td><a href="https://privacy.kisa.or.kr" target="_blank">https://privacy.kisa.or.kr</a></td>
                                        </tr>
                                        <tr>
                                            <td>개인정보분쟁조정위원회</td>
                                            <td>1833-6972</td>
                                            <td><a href="https://www.kopico.go.kr" target="_blank">https://www.kopico.go.kr</a></td>
                                        </tr>
                                        <tr>
                                            <td>대검찰청<br>사이버수사과</td>
                                            <td>(국번없이)<br>1301</td>
                                            <td><a href="http://www.spo.go.kr/" target="_blank">http://www.spo.go.kr/</a></td>
                                        </tr>
                                        <tr>
                                            <td>경찰청<br>사이버안전국</td>
                                            <td>(국번없이)<br>182</td>
                                            <td><a href="http://cyberbureau.police.go.kr" target="_blank">http://cyberbureau.police.go.kr</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                    <div class="in-txt h-top2">본 개인정보취급방침의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에 서비스 내 '공지사항'을 통해 사전 고지할 것입니다. 개인정보의 수집 및 활용, 제3자 제공 등과 같이 고객 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.</div>
                    <div class="in-txt">현 개인정보처리방침은 2020년 01월 01일부터 적용됩니다.
                        <ul class="ul-type h-top">
                            <li>공고 일자 : 2020년 01월 01일</li>
                            <li>시행 일자 : 2020년 01월 01일</li>
                        </ul>
                    </div>
                </div>
			</div>
		</div>
		<!-- //content -->
	</div>
	<!-- // container -->

</div>
<!-- //wrap -->


</body>
  </html>
    `;
  return html;
};

export const useTermsHtml = () => {
  const html = `
    <html>
    <head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
    <style type="text/css">
      ${commonCss}
      ${defaultCss}
    </style>
    </head>
    <body>

<!-- wrap -->
<div id="wrap" class="pop">

	<!-- container -->
	<div id="container">

		<!-- content -->
		<div id="content">
			<div class="cont-inner">                
                <div class="term">
					<h1 class="first">모바일서비스(앱) 이용약관</h1>
					<h2>제1장 총칙</h2>
					<h3>제1조 (목적)</h3>
					<div class="in-txt">
						이 약관은 주식회사 인슈로보 (이하" 회사"라 한다)가 운영하는 모바일기기를 통해 제공하는
						모바일 서비스(이하 "서비스")를 이용함에 있어 서비스를 이용하는 이용자의 권리 &middot; 의무 및
						책임 사항을 규정함을 목적으로 합니다. 다만, 전자금융거래 이용에 관한 사항은 '전자금융거래 이용약관'의 내용을 따릅니다.
					</div>
					<h3>제2조 (용어의 정의)</h3>
					<ol class="ol-type numb">
						<li>이 약관에서 사용하는 용어의 의미는 다음과 같습니다.
							<ul class="dep2">
								<li>단말기란 무선 인터넷서비스가 가능하고, 인슈로보 모바일 서비스 앱을 설치할 수 있는 휴대용 전자기기를 말한다.</li>
								<li>모바일 서비스란 이용자가 모바일 기기를 통해 이용할 수 있도록 인슈로보에서 제공하는 보험 및 기타서비스를 의미합니다.</li>
								<li>이용자란 모바일에서 인슈로보 앱에 접속하여 이 약관에 따라 인슈로보 모바일 서비스를 제공받는 고객을 의미합니다.</li>
								<li>운영자’란 본 서비스의 전반적인 관리와 원활한 운영을 위하여 회사가 선정한 자를 말합니다.</li>
								<li>회원이란 회사의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회원을 대상으로 제공하는 서비스를 이용하는 고갱을 말합니다. 일반회원(개인. 법과 영업관리자로 구분합니다. </li>
								<li>연결이라함은 읿반회원이 영업관리자에게 개인 정보를 제공하고, 영업회원은 일반회원의 정보를 활용해 재화 및 용역을 공급하는 상태를 말합니다.</li>
							</ul>
						</li>
						<li>이 약관에서 별도로 정하지 않은 용어는 전자금융거래법 또는 관계 법령 등에서 정하는 바에 따릅니다. 기타 관계 법령 등 적용되지 않는 것은 일반적인 관례에 따른다.</li>
					</ol>
					<h3>제3조 (약관의 효력 및 개정)</h3>
					<ol class="ol-type numb">
						<li>회사는 본 약관의 내용을 이동 통신형 단말기(이하 '단말기')를 통하여 구현된 ‘인슈로보’ 앱 서비스 화면에 게시하거나 기타의 방법으로 이용자가 알 수 있도록 알리고, 이에 동의한 이용자가 본 서비스에 가입하여 회원이 되었을 때 약관은 그 효력이 발생합니다.</li>
						<li>회사는 필요하다고 인정되는 경우 이 약관의 내용을 개정할 수 있으며, 변경된 약관은 제1과 같은 방법으로 공지 또는 통지함으로써 효력이 발생 됩니다. 단, 이용자의 권리, 의무에 중대한 영향을 주는 개정에 대해서는 적용 일자 30일 전에 공지하도록 합니다.</li>
						<li>이용자는 신설 또는 개정된 약관에 동의하지 않을 경우 회원탈퇴를 요청할 수 있으며, 신설 또는 개정된 약관의 효력발생일 이후에도 서비스를 계속 사용할 경우 약관의 변경사항에 동의한 것으로 간주 됩니다.</li>
					</ol>
					<h3>제4조 (약관의 해석 등)</h3>
					<ol class="ol-type numb">
						<li>이용자가 회사와 개별계약을 체결하여 서비스를 이용하는 경우 회사는 개별 서비스에 대한 이용약관 또는 운영규칙을 둘 수 있으며, 해당 내용이 본 약관과 상충되는 경우 개별 서비스에 대한 운영규칙이 우선합니다.</li>
						<li>본 약관에 밝히지 않은 사항은 약관규제에 관한 법률, 전기통신기본법, 전기통신사업법,정보통신망 이용촉진 및 개인정보보호 등에 관한 법률 및 기타 관련 법령의 규정을 따릅니다.</li>
						<li>회사는 필요한 경우 특정 서비스에 관하여 적용될 사항(이하 '개별약관'이라 함)과 본 서비스 이용과 관련된 세부이용지침을 정하여 이를 공지할 수 있습니다.</li>
						<li>본 약관과 관련하여 회사의 정책 변경, 법령의 제·개정, 공공기관의 고시나 지침 등에 따라 회사가 ‘인슈로보’ 앱 공지사항 게시판 등을 통해 공지하는 내용도 이용 계약의 일부를 구성합니다.</li>
					</ol>
					<h2>제2장 이용자 가입(이용)계약</h2>
					<h3>제5조 (이용계약의 성립)</h3>
					<ol class="ol-type numb">
						<li>회사와 이용자 사이에 본 서비스를 이용하고자 하는 자(이하 ‘이용자’)가 단말기를 통하여 제시된 본 서비스 이용약관에 '동의함' 버튼을 선택한 뒤 회원 가입 버튼을 클릭하여 전송하고,본 약관과 개인정보 처리지침, 개인정보수집·이용 동의서 등에 동의를 하면 동의하는 것으로 간주하고 회사는 이에 승낙함으로써 체결됩니다.</li>
						<li>회원가입신청에 대한 회사의 승낙 시점은 회원가입이 완료되었다는 내용이 열린 때, 또는 시스템상으로 로그인(LOG-IN)이 가능해진 시점으로 봅니다.</li>
						<li>회원가입은 이용자가 회원이 되어 본 서비스를 이용하기 위해 수행하는 절차로써, 이용자가 본 서비스의 모바일 애플리케이션을 내려받은 후 최초 실행 때 제시되는 이용약관에 동의하고 가입 신청 절차를 수행하는 방식으로 이루어집니다.</li>
						<li>회사는 다음 각호의 해당하는 경우 가입 신청에대한 승낙을 하지 않거나, 그 사유가 해소될 때까지 승낙을 유보할 수 있고, 사후에 이용계약을 해지할 수 있습니다.
							<ul class="dep2">
								<li>가입 신청자가 이 약관에 의해 이전에 이용자 자격을 상실한 적이 있는 경우</li>
								<li>타인의 정보를 이용하여 가입한 경우</li>
								<li>기술상 장애사유가 있는 경우</li>
								<li>휴대폰 인증 등 회사가 정한 인증절차를 완료하지 않은 경우</li>
								<li>가입 신청자의 귀책 사유로 인하여 승인이 불가능 하거나 기타 규정에 제반 사항을 기재하지 않은 경우</li>
								<li>이미 가입된 이용자인 경우</li>
							</ul>
						</li>
					</ol>
					<h3>제6조 이용자 정보 제공</h3>
					<ol class="ol-type numb">
						<li>회원으로 가입하여 서비스를 이용하고자 하는 자[법인 또는 법인대표자(회의)]는 이메일 주소와 비밀번호를 제공하거나, 페이스북 ID/구글ID/카카오ID/네이버ID 등의 소셜 ID 식별자 중 하나의 정보를 제공해야 합니다. 또한 서비서 이용을 위한 필요한 개인 정보의 수집과 이용에 대한 동의를 받을 수 있습니다.</li>
						<li>가입 신청자가 1호에 정한 사항을 거부할 경우 회원 가입 및 서비스 이용이 제한될 수 있으며, 타인의 정보를 도용하여 회원으로 가입한 자는 회사가 제공하는 서비스를 이용할 수 없으며, 이용하여서는 안됩니다.</li>
					</ol>
					<h3>제7조 회원의 계정(ID) 및 비밀번호 관리</h3>
					<ol class="ol-type numb">
						<li>아이디 및 비밀번호에 대한 관리책임은 회원에게 있으며, 회원은 어떠한 경우에도 본인의 아이디 또는 비밀번호를 타인에게 양도하거나 대여할 수 없습니다.</li>
						<li>회사의 귀책 사유 없이 아이디 또는 비밀번호의 유출, 양도, 대여로 인하여 발생하는 손실이나 손해에 대해서는 이용자 및 회원 본인이 그에 대한 책임을 부담합니다.</li>
						<li>회원은 서비스가 정한 기준을 충족하는 범위 내에서 자유롭게 비밀번호를 정할 수 있으며, 정해진 비밀번호는 이용자가 원하는 경우 언제든지 변경이 가능합니다.</li>
						<li>회원은 서비스의 이용을 위하여 사용하는 비밀번호에 대한 보호 및 관리책임을 부담합니다. 다만, 서비스 보완 등을 이유로 이용자에게 정기적 또는 비정기적으로 비밀번호의 변경을 권고할 수 있습니다.</li>
					</ol>
					<h3>제8조 (회원의 해지. 탈퇴)</h3>
					<ol class="ol-type numb">
						<li>이용자는 회원가입계약을 해지하고자 하는 경우에 탈퇴 신청을 할 수 있으며, 회사는 빠른 시간 내로 탈퇴 처리를 할 의무가 있습니다.</li>
						<li>회사는 회원이 회원의 의무에 위배되는 행위를 한 경우 사전통지 없이 회원가입계약을 해지하거나 회원자격을 적절한 방법으로 제한 및 정지할 수 있습니다.</li>
					</ol>
					<h3>제9조 (회원의 자격 제한, 정지의 절차)</h3>
					<ol class="ol-type numb">
						<li>회사는 제8조 2호 규정에 의하여 회원자격을 해지, 제한 또는 정지하고자 하는 경우에는 그 사유, 일시 및 기간을 정하여 전자우편, 서면 또는 전화, 문자메세지 등의 방법에 의하여 해당 회원 또는 대리인에게 통지합니다. 다만, 회사가 긴급하게 회원의 서비스 이용을 정지할 필요가 있다고 인정하는 경우에는 그러하지 아니합니다.</li>
						<li>1호에 의하여 이용제한의 통지를 받은 회원 또는 그 대리인이 이용제한 통지에 대하여 이의가 있는 경우에는 이의신청을 할 수 있습니다.</li>
						<li>회사는 2호의 규정에 의한 이의신청에 대하여 그 확인을 위한 기간까지 이용제한을 일시 연기할 수 있으며, 그 결과를 제1항 본문의 통지 방법에 따라 이용자 또는 그 대리인에게 통지합니다.</li>
						<li>회사는 이용제한기간 중에 그 사유가 해소된 것이 확인된 경우에는 이용제한 조치를 즉시 해제합니다.</li>
					</ol>
					<h2>제3장 서비스 제공 및 이용</h2>
					<h3>제10조 (서비스의 내용 및 변경)</h3>
					<ol class="ol-type numb">
						<li>회사는 다음과 같은 서비스를 제공합니다.
							<ul class="dep2">
								<li>보험사 금융 상품 보험 계약 및 금융관련 정보 및 기타 개인정보 확인 등</li>
								<li>기 계약된 보험 계약(가입증명원) 조회</li>
								<li>일반회원(개인, 법인)과 영업관리자에 대한 연결 및 정보 제공 연결은 일반회원이 영업관리자를 선택하는 경우에만 이루어집니다. 일반회원은 영업회원과 연결 후 영업회원으로부터 재화를 제공 받을 수 있습니다.</li>
								<li>다른 회사와의 제휴 계약 등을 통해 제공되는 일체의 서비스</li>
								<li>기타 회사가 정하는 업무 일체</li>
							</ul>
						</li>
						<li>회사는 필요한 경우 언제든지 서비스의 내용을 추가 또는 변경할 수 있습니다.</li>
					</ol>
					<h3>제11조 (서비스의 개시/이용/중지)</h3>
					<ol class="ol-type numb">
						<li>서비스는 회사가 이용신청을 승낙한 때로부터 즉시 개시됩니다. 회사는 업무상 또는 기술상의 장애로 본 서비스의 제공을 개시하지 못할 때에는 해당 내용을 사이트에 공지하거나 회원에게 통지합니다. 본 서비스 내 개별 서비스별 구체적인 안내사항은 개별서비스 화면에서 확인할 수 있습니다.</li>
						<li>서비스는 회사의 업무상 또는 기술상 장애, 기타 특별한 사유가 없는 한 연중무휴, 1일 24시간 이용할 수 있습니다. 다만 설비의 점검 등 회사가 필요한 경우 또는 설비의 장애, 서비스 이용의 폭주 등 불가항력 사항으로 인하여 서비스 이용에 지장이 있는 경우 예외적으로 서비스 이용의 전부 또는 일부에 대하여 제한할 수 있습니다.</li>
						<li>회사는 제공하는 서비스 중 일부에 대한 서비스 이용시간을 별도로 정할 수 있으며, 이 경우 그 이용시간을 사전에 회원에게 공지 또는 통지합니다.</li>
						<li>회사는 다음 각 호에 해당하면 본 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
							<ul class="dep2">
								<li>서비스용 설비의 보수 등을 위하여 부득이한 경우</li>
								<li>「전기통신사업법」에 규정된 기간통신사업자가 전기통신서비스를 중지하는 경우</li>
								<li>제반설비의 장애 또는 이용량 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우</li>
								<li>본 서비스의 변경 및 중단 등과 같은 특수사정으로 본 서비스를 유지할 수 없는 경우</li>
								<li>기타 천재지변, 국가비상사태 등 불가항력 사유가 있는 경우</li>
							</ul>
						</li>
						<li>회사는 고의 또는 과실이 없는 한 본 조에 따른 서비스의 변경, 중지로 발생하는 문제에 대해 어떠한 책임도 지지 않습니다.</li>
					</ol>
					<h3>제12조 (서비스 구매 신청)</h3>
					<ol class="ol-type numb">
						<li>회원은 다음 또는 이와 유사한 방법에 의하여 서비스 구매를 신청하며, 회사는 회원이 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.
							<ul class="dep2">
								<li>재화나 용역(보험상품, 서비스상품)의 검색 및 선택</li>
								<li>약관내용에 동의하고 약관내용 사항을 확인하거나 거부하는 표시</li>
								<li>결재방법의 선택</li>
							</ul>
						</li>
						<li>기업회원은 법인명으로 기업회원으로 가입 신청을 하고 해당기업이 참여하기를 원하는 서비스를 신청하고 결재합니다.</li>
						<li>회사는 회원에게 각종 서비스를 제공하고 회사의 내부 정책에 따라 서비스 이용료를 부과할 수 있습니다.</li>
					</ol>
					<h3>제13조 (정보의 제공 및 광고의 게재)</h3>
					<ol class="ol-type numb">
						<li>회사는 회원이(개인, 법인) 본 서비스의 운영과 관련한 공지사항을 본 서비스의 홈페이지 또는 모바일 애플리케이션의 서비스 화면에 게재하거나 문자메시지(SMS), 이메일(E-MAIL), 스마트푸시(Smart Push)등으로 통지할 수 있습니다.</li>
						<li>회사는 회원이(개인, 법인) 서비스의 이용 중 관련한 각종 정보와 광고를 본 서비스의 홈페이지 또는 모바일 애플리케이션의 서비스 화면에 게재하거나 회원의 동의를 얻어 이메일(E-MAIL), 전자우편, 푸시알림, 문자메시지(SMS/MMS), 텔레마케팅(TM) 등의 방법으로 회원에게 제공할 수 있습니다.</li>
						<li>회사는 본 서비스 등을 유지하기 위하여 광고를 게재할 수 있으며, 회원은 서비스 이용시 노출되는 광고게재에 대하여 동의합니다.</li>
						<li>회사가 제공하는 제3자가 주체인 3호 광고에 회원이 참여하거나 교신, 거래를 함으로써 발생하는 손실과 손해에 대해서 회사는 어떠한 책임도 부담하지 않습니다.</li>
						<li>회사는 상기 정보 제공과 관련해서는 정보를 회사에 제공하는 플랫폼사업자, 구글플레이, 애플 앱스토어 등 앱스토어 사업자의 약관 규정 및 회사의 약관에 준거하며 관련 법령 및 시행령의 규정을 준수합니다.</li>
					</ol>
					<h2>제4장 서비스와 관련한 권리 &middot; 의무 관계</h2>
					<h3>제14조 (회사의 의무)</h3>
					<ol class="ol-type numb">
						<li>회사는 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을 다하여야 합니다.</li>
						<li>회사는 서비스에 관련된 설비를 항상 운용할 수 있는 상태로 유지·보수하고, 장애가 발생하는 경우 지체 없이 이를 수리·복구할 수 있도록 최선의 노력을 다하여야 합니다.</li>
						<li>회사는 서비스와 관련한 회원의 불만사항이 접수되는 경우 이를 조속히 처리하도록 최선의 노력을 다하여야 합니다.</li>
						<li>회사는 이용자가 안전하게 서비스를 이용할 수 있도록 신용 정보를 포함한 일체의 개인정보보호를 위한 보안시스템을 갖추어야 하며 개인정보 처리방침을 공시하고 준수 합니다.</li>
						<li>회사는 이용자가 수신 동의를 하지 않은 영리 목적의 광고성 이메일, SMS, 스마트폰 알림 등을 발송하지 않습니다.</li>
					</ol>
					<h3>제15조 (개인정보의 보호)</h3>
					<ol class="ol-type numb">
						<li>회사는 서비스와 관련하여 지득한 회원의 개인정보를 본인의 사전 승낙 없이 타인에게 공개 또는 배포할 수 없습니다. 다만, 다음 각 호의 해당하는 경우에는 그러하지 아니합니다.
							<ul class="dep2">
								<li>관계법령에 의하여 수사상의 목적으로 관계기관으로부터 요구받은 경우</li>
								<li>정보통신윤리위원회 및 방송통신위원회의 요청이 있는 경우</li>
								<li>기타 관계법령에 의한 경우</li>
								<li>특정 개인을 식별할 수 없는 통계작성, 홍보자료, 학술연구 등의 목적일 때</li>
							</ul>
						</li>
					</ol>
					<h3>제16조 (회원의 의무)</h3>
					<ol class="ol-type numb">
						<li>회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 회사가 통지하는 사항을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 아니 됩니다.</li>
						<li>회원은 회사의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다.</li>
						<li>회원은 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판·방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.</li>
						<li>회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 아니 됩니다.
							<ul class="dep2">
								<li>다른 회원의 아이디(ID)를 부정적인 목적에 사용하는 행위</li>
								<li>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위</li>
								<li>선량한 풍속, 기타 사회질서를 해하는 행위</li>
								<li>타인의 명예를 훼손하거나 모욕하는 행위</li>
								<li>타인의 지적재산권 등의 권리를 침해하는 행위</li>
								<li>해킹행위 또는 컴퓨터바이러스의 유포행위</li>
								<li>타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위</li>
								<li>서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위</li>
								<li>기타 회사가 부적절하다고 판단하는 행위</li>
							</ul>
						</li>
					</ol>
					<h3>제17조 (회원의 ID 및 휴대폰번호 인증에 대한 의무)</h3>
					<ol class="ol-type numb">
						<li>회원은 서비스를 이용하는 경우 본인의 ID 및 휴대폰번호 인증을 해야 합니다.</li>
						<li>ID 및 휴대폰번호 인증에 대한 모든 관리의 책임은 회원에게 있습니다.</li>
						<li>회원은 ID 및 휴대폰번호 인증을 제3자에게 이용하게 하여서는 아니 됩니다.</li>
						<li>ID 및 휴대폰번호 인증 관리상의 불충분, 사용상의 과실, 제3자의 사용 등에 의한 손해의 책임은 회원이 집니다.</li>
						<li>회원은 ID를 도난당하거나 제3자에게 사용되고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 지시가 있는 경우에는 그에 따라야 합니다.</li>
					</ol>
					<h3>제18조 (게시물 또는 내용물의 삭제)</h3>
					<div class="in-txt">
						회사는 서비스의 게시물 또는 내용물이 회원이 회원의 의무에 위배되는 행위를 한 경우나
						회사 소정의 게시기간을 초과하는 경우 및 게시판의 성격에 부합되지 않는 게시물인 경우 해당한다고 판단되는 경우 회원에게 사전통지나 동의 없이 이를 삭제할 수 있습니다.
					</div>
					<h2>제5장 기타</h2>
					<h3>제19조 (저작권의 귀속. 양도금지)</h3>
					<ol class="ol-type numb">
						<li>회사가 작성한 서비스에 관한 저작권 및 기타 지적재산권은 회사에 귀속됩니다.</li>
						<li>회원이 작성한 게시물에 대한 모든 권리 및 책임은 게시한 회원에게 있습니다. 다만, 회원이 회사에 제공한 공개적인 게시물은 회사에게 동 게시물을 전부 또는 일부를 사용, 복제, 수정, 개조, 출판, 번역, 창작물을 제작하거나 배포, 실행 또는 전시할 수 있는 권리 및 사용권을 부여한 것으로 봅니다.</li>
						<li>회원은 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.</li>
					</ol>
					<h3>제20조 (손해배상)</h3>
					<div class="in-txt">회사가 제공하는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 동 손해가 회사의 중대한 과실에 의한 경우를 제외하고는 회사는 이에 대하여 책임을 부담하지 않습니다.</div>
					<h3>제21조 (책임한계)</h3>
					<ol class="ol-type numb">
						<li>회사는 회원의 귀책사유로 인한 서비스이용의 장애에 대하여 책임을 지지 않습니다.</li>
						<li>회원의 아이디(ID)와 휴대폰번호 인증 관리와 관련하여 당해 회원의 귀책사유에 의한 손해 또는 제3자에 의한 부정사용 등에 대한 책임은 모두 회원에게 있습니다.</li>
						<li>회사는 회원이 서비스에 게재한 정보, 자료, 사실의 정확성, 신뢰성 등 그 내용에 관하여는 어떠한 책임도 부담하지 아니합니다.</li>
						<li>회사가 제공하는 정보와 자료는 거래의 목적으로 이용될 수 없습니다. 따라서 본 서비스의 정보와 자료 등에 근거한 거래는 전적으로 회원자신의 책임과 판단아래 수행되는 것이며 회사는 이에 대하여 책임을 부담하지 않습니다.</li>
						<li>회원이 제16조, 기타 이 약관의 규정을 위반함으로 인하여 회사가 회원 또는 제3자에 대하여 책임을 부담하게 되고, 이로써 회사에게 손해가 발생되는 경우 이 약관을 위반한 당해 회원은 회사에게 발생하는 모든 손해를 배상하여야 하며, 동 손해로부터 회사를 면책시켜야 합니다.</li>
					</ol>
					<h3>제22조 (재판관할)</h3>
					<ol class="ol-type numb">
						<li>회사와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.</li>
						<li>제1항의 규정에도 불구하고, 동 분쟁으로 인하여 소송이 제기될 경우 동 소송은 회사의 본사소재지를 관할하는 법원의 관할로 합니다.</li>
					</ol>
					<h3>[부칙]</h3>
					<ul class="ul-type">
						<li>공고일자 : 2020년 01월 08일</li>
						<li>적용일자 : 2020년 01월 08일</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- //content -->
	</div>
	<!-- // container -->

</div>
<!-- //wrap -->


</body>
    </html>
      `;
  return html;
};

export const termsTermsa1 = () => {
  const html = `
    <html>
    <head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
    <style type="text/css">
      ${commonCss}
      ${defaultCss}
    </style>
    </head>
    <body>
    <div id="wrap" class="pop">

	<!-- container -->
	<div id="container">
		<!-- content -->
		<div id="content">
			<div class="cont-inner">                
                <div class="term">
                    <h1 class="first">개인(신용)정보의 사전 수집/이용에 관한 사항(필수)</h1>
                    <div class="in-box">당사 및 당사 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 수집&middot;이용하고자 합니다. 이에 대하여 동의하십니까?</div>
                    
                    <h2>보험료 산출 시,<br>개인(신용)정보의 수집&middot;이용 목적</h2>
                    <ul class="ul-type">
                        <li>보험계약 상담 및 보험계약 인수여부 결정을 위한 판단</li>
                        <li>재무설계서비스</li>
                        <li>실손의료보험계약, 기타손해보험계약 등 '실제 발생하는 손해만을 보상하는 실손형 보험'의 중복가입 확인 및 정액담보 가입사항 확인을 위한 보험가입내역 조회</li>
                        <li>민원 및 분쟁 관련 대응 목적</li>
                        <li>만기알림서비스 신청 고객의 보험 만기 안내 목적</li>
                    </ul>

                    <h2>수집&middot;이용할 개인(신용)정보의 내용</h2>
                    <ul class="ul-type">
                        <li>개인식별정보(성명, 주민등록번호, 외국인등록번호, 주소, 직업, 전화번호, 휴대전화번호, 전자우편주소, 음성정보, 외국인체류자격/코드)</li>
                        <li>질병 및 상해에 관한 정보</li>
                        <li>당사, 신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 보험계약정보, 보험금 지급 관련 정보(사고정보 포함),교통법규위반 개인정보(음주운전, 운전면허 효력에 관한 사항)</li>
                        <li>손해보험협회에서 수집&middot;관리하는 전문보험계약자(보험설계사&middot;보험대리점&middot;보험중개사 등)의 정보</li>
                    </ul>

                    <h2>개인(신용)정보의 보유&middot;이용 기간</h2>
                    <ul class="ul-type">
                        <li>이용기간 : 수집&middot;이용 동의일로부터 3개월까지</li>
                        <li>보유기간 : 수집&middot;이용 동의일로부터 1년까지</li>
                    </ul>

                </div>
			</div>
		</div>
		<!-- //content -->
	</div>
	<!-- // container -->

    </div>
    </body>
    </html>
      `;
  return html;
};

export const termsTermsa2 = () => {
  const html = `
      <html>
      <head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
      <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
      <style type="text/css">
        ${commonCss}
        ${defaultCss}
      </style>
      </head>
      <body>
            <!-- wrap -->
        <div id="wrap" class="pop">

            <!-- container -->
            <div id="container">
                <!-- content -->
                <div id="content">
                    <div class="cont-inner">                
                        <div class="term">
                            <h1 class="first">개인(신용) 정보의 조회에 관한 사항(필수)</h1>
                            <div class="in-box">당사 및 당사 업무수탁자는 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에 따라 귀하의 개인(신용)정보를 다음과 같이 신용정보집중기관, 보험요율산출기관 및 국민 안전처 (소방본부, 소방서포함), 공공기관 등으로 조회하고자 합니다. 이에 동의하십니까?</div>
                            
                            <h2>보험료 산출 시,<br>개인(신용)정보 조회 목적</h2>
                            <div class="ul-type">보험계약상담, 보험계약 인수여부 결정을 위한 판단</div>
                            <h2>조회할 개인(신용)정보의 내용</h2>
                            <ul class="ul-type">
                                <li>신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 정보(피보험자의 질병 및 상해에 관한 정보, 보험계약정보, 보험금지급정보),교통법규위반 개인정보(음주운전, 운전면허 효력에 관한 사항)</li>
                                <li>신용정보회사 및 통신사의 실명인증 및 본인인증을 위한 정보</li>
                                <li>손해보험협회에서 수집&middot;관리하는 전문보험계약자(보험설계사&middot;보험대리점&middot;보험중개사 등)의 정보</li>
                            </ul>

                            <h2>조회동의 유효 기간 및 조회자(제공받는 자)의 개인(신용)정보의 보유&middot;이용 기간</h2>
                            <div class="ul-type">동의일로부터 보험계약의 청약시까지(최대 3개월)</div>

                        </div>
                    </div>
                </div>
                <!-- //content -->
            </div>
            <!-- // container -->

        </div>
        <!-- //wrap -->
      </body>
      </html>
        `;
  return html;
};
export const termsTermsa3 = () => {
  const html = `
        <html>
        <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
        <style type="text/css">
          ${commonCss}
          ${defaultCss}
        </style>
        </head>
        <body>
                <!-- wrap -->
        <div id="wrap" class="pop">

            <!-- container -->
            <div id="container">
                <!-- content -->
                <div id="content">
                    <div class="cont-inner">                
                        <div class="term">
                            <h1 class="first">개인(신용)정보의 제공에 관한 사항(필수)</h1>
                            <div class="in-box">당사는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 제3자에게 제공하고자 합니다. 이에 대하여 동의하십니까?</div>
                            
                            <h2>보험료 산출 시,<br>개인(신용)정보를 제공받는 자</h2>
                            <div class="ul-type">병원, 의원 등 건강진단 관련 업무를 위탁받은 자, 계약적부 조사를 위탁받은 자 (진단 및 계약적부 조사가 필요한 보험계약의 경우에 한함), 신용정보회사, 재보험사, 원수보험사</div>
                            <h2>개인(신용)정보를 제공받는 자의 이용목적</h2>
                            <ul class="ul-type">
                                <li>건강진단 업무(지정의 또는 파라메딕업체), 고지사항 확인(적부조사회사), 의료자문(사의), 본인 실명인증(신용정보회사), 인수 가능여부 확인(재보험사)</li>
                                <li>본인인증 및 전자서명 서비스 업체 : 본인인증 및 전자서명 대행 업무</li>
                            </ul>
                            <h2>제공할 개인(신용)정보의 내용</h2>
                            <ul class="ul-type">
                                <li>개인식별정보(성명, 주민등록번호, 외국인등록번호, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소)</li>
                                <li>계약 전 알릴 의무사항</li>
                                <li>당사, 신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 보험계약정보 및 보험금지급 관련 정보(사고정보 포함) (단, 각 제공받는 자의 이용 목적을 위해 필요한 정보에 한함)</li>
                            </ul>
                            <h2>제공받는 자의 개인(신용)정보 보유&middot;이용기간</h2>
                            <div class="ul-type">수집&middot;이용 동의일로부터 3개월까지</div>

                        </div>
                    </div>
                </div>
                <!-- //content -->
            </div>
            <!-- // container -->

        </div>
        <!-- //wrap -->
        </body>
        </html>
          `;
  return html;
};

export const termsTermsa4 = () => {
  const html = `
        <html>
        <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
        <style type="text/css">
          ${commonCss}
          ${defaultCss}
        </style>
        </head>
        <body>
        <!-- wrap -->
        <div id="wrap" class="pop">
        
            <!-- container -->
            <div id="container">
                <!-- content -->
                <div id="content">
                    <div class="cont-inner">                
                        <div class="term">
                            <h1 class="first">민감정보 및 고유식별정보의 처리에 관한 사항(필수)</h1>
                            <div class="in-box">당사 및 당사 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에 따라 상기의 개인(신용)정보에 대한 개별 동의사항에 대하여 다음과 같이 귀하의 민감정보(질병&middot;상해정보) 및 고유식별정보(주민등록번호 &middot; 외국인등록번호)를 처리(수집&middot;이용, 조회, 제공)하고자 합니다. 이에 동의하십니까?</div>
                            <ul class="ul-type h-top2">
                                <li>질병&middot;상해정보 처리</li>
                                <li>주민등록번호, 외국인등록번호, 운전면허증번호 처리</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- //content -->
            </div>
            <!-- // container -->
        
        </div>
        <!-- //wrap -->
        </body>
        </html>
          `;
  return html;
};

export const termsTermsa5 = () => {
  const html = `
                  <html>
                  <head>
                  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                  <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                  <style type="text/css">
                    ${commonCss}
                    ${defaultCss}
                  </style>
                  </head>
                  <body>
                  <!-- wrap -->
                  <div id="wrap" class="pop">
                  
                      <!-- container -->
                      <div id="container">
                          <!-- content -->
                          <div id="content">
                              <div class="cont-inner">                
                                  <div class="term">
                                      <h1 class="first">보험가입동의(필수)</h1>
                                      <h2>제 1조(목적)</h2>
                                      <div class="in-txt">이 보험가입동의는 인슈로보(이하‘회사‘)의 회원들을 위하여 제공하는 서비스 이용에 관하여 회원들간 협약사항을 규정함을 그 목적으로 합니다.</div>
                  
                                      <h2>제 2조(회원자격)</h2>
                                      <ol class="ol-type numb">
                                          <li>회사가 운영하는 서비스의 이용약관에 동의한 회원 중 해당 보험가입동의에 동의한 회원은 이 협약의 당사자가 됩니다.</li>
                                          <li>회원 자격득실 증에 관하여는 각 이용약관에서 정하는 바에 따릅니다.</li>
                                      </ol>
                  
                                      <h2>제 3조(단체보험가입 청약 등)</h2>
                                      <ol class="ol-type numb">
                                          <li>회사는 회원을 위하여 계약자로서 보험사와 단쳬보험계약을 체결할 수 있습니다.</li>
                                          <li>회사가 계약자인 단쳬보험계약에 피보험자로 가입하기를 희망하는 회원은 소정의 절차에 따라 보험가입신청(보험청약)을 합니다.</li>
                                          <li>보험계약을 하고자 하는 회원은 보험약관, 자주하는 질문 등을 충분히 읽고 이해한 후 청약을 하며, 보험사와 회사가 고지를 요구하는 사항에 대하여 성실히 답합니다.</li>
                                          <li>회원이 가입하는 보험의 수익자는 보험가입자(피보험자) 본인과 그 법정 상속인이 됩니다.</li>
                                          <li>회사가 계약한 단체보험에 관하여 기타 이 보험가입동의에서 정하지 않은 사항은 회사가 보험사와 약정한 바에 따릅니다.</li>
                                      </ol>
                  
                                      <h2>제 4조(기타사항)</h2>
                                      <ol class="ol-type numb">
                                          <li>회사의 기존 서비스 변경, 새로운 서비스 출시, 법령의 개폐회원 요구 등의 사정이 있어 이 규약을 변경할 필요가 있는 경우, 회사는 회원들을 위하여 이 보험가입동의 내용을 즉시 변경합니다. 그리고 변경된 내용은 그 즉시 효력을 발합니다.</li>
                                          <li>회사는 보험가입동의 내용을 변경하기 위해 필요한 경우 회원들에게 의견을 구할 수 있으며, 회원들은 이에 성실히 응합니다.</li>
                                          <li>보험가입동의 내용을 변경하기 희망하는 회원은 인슈로보에 그 구체적 변경안과 이유를 제시하여 변경 제안할 수 있습니다. 이에 대하여는 회사는 전항에 따라 처리합니다.</li>
                                          <li>회사는 단체보험가입 등 해당 보험가입동의에 직접적으로 영향을 받는 서비스를 이용하는 회원에게는 개별적으로 해당 보험가입동의에 부동의 하는지 의견을 구합니다. 이때 보험가입동의에 부동의하는 회원은 해당서비스를 이용하지 않을 수 있습니다.</li>
                                      </ol>
                                  </div>
                              </div>
                          </div>
                          <!-- //content -->
                      </div>
                      <!-- // container -->
                  
                  </div>
                  <!-- //wrap -->
                  </body>
                  </html>
                    `;
  return html;
};

export const termsTermsb1 = () => {
  const html = `
          <html>
          <head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
          <style type="text/css">
            ${commonCss}
            ${defaultCss}
          </style>
          </head>
          <body>
                    <!-- wrap -->
            <div id="wrap" class="pop">

                <!-- container -->
                <div id="container">
                    <!-- content -->
                    <div id="content">
                        <div class="cont-inner">                
                            <div class="term">
                                <h1 class="first">개인(신용)정보의수집/이용에 관한 사항(선택)</h1>
                                <div class="in-box">당사는「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 보험상품 소개 및 홍보 등을 위하여 귀하의 개인(신용)정보를 다음과 같이 수집&middot;이용하고자 합니다. 이에 대하여 동의하십니까?</div>
                                <div class="info-txt">개인(신용)정보의 수집&middot;이용 목적 &middot; 상품&middot;서비스 소개 및 판매, 사은&middot;판촉행사 안내(방문, 우편, 전화, SMS포함), 시장조사</div>
                                <h2>수집&middot;이용할 개인(신용)정보의 내용</h2>
                                <ul class="ul-type">
                                    <li>개인식별정보 (성명, 생년월일, 성별, 주소, 직업, 전화번호, 휴대폰전화번호, 전자우편주소, 외국인 체류자격/코드)</li>
                                    <li>보험계약 정보</li>
                                </ul>
                                <h2>개인(신용)정보의 보유&middot;이용기간</h2>
                                <ul class="ul-type">
                                    <li>당사와 보험계약 체결실적이 있는 고객 : 동의일로부터 5년 이내</li>
                                    <li>당사와 보험계약 체결실적이 없는 고객 : 동의일로부터 3년</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- //content -->
                </div>
                <!-- // container -->

            </div>
            <!-- //wrap -->
          </body>
          </html>
            `;
  return html;
};

export const termsTermsb2 = () => {
  const html = `
          <html>
          <head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
          <style type="text/css">
            ${commonCss}
            ${defaultCss}
          </style>
          </head>
          <body>
                    <!-- wrap -->
            <div id="wrap" class="pop">

                <!-- container -->
                <div id="container">
                    <!-- content -->
                    <div id="content">
                        <div class="cont-inner">                
                            <div class="term">
                                <h1 class="first">개인(신용)정보의 제공에 관한 사항(선택)</h1>
                                <div class="in-box">당사는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 제3자에게 상품소개 및 홍보 등 영업목적으로 제공하고자 합니다. 이에 대하여 동의하십니까?</div>
                                <h2>개인(신용)정보를 제공받는 자</h2>
                                <ul class="ul-type">
                                    <li>목적 : 당사 상품&middot;서비스 소개 및 판매</li>
                                    <li>제공받는자 : 당사와 모집위탁계약을 체결한 자 (설계사&middot;대리점) (단, 비전속대리점의 경우, 동 계약을 모집한 대리점에 한함) : 제휴업체</li>
                                </ul>        
                                <h2>개인(신용)정보를 제공받는 자의 이용목적</h2>
                                <ul class="ul-type">
                                    <li>모집수탁자 : 당사의 상품&middot;서비스소개 및 판매, 사은&middot;판촉행사 안내(방문, 우편, 전화, SMS포함), 시장조사</li>
                                    <li>제휴사 등 : 안전운전 점수 산정</li>
                                </ul>
                                <h2>제공할 개인(신용)정보의 내용</h2>
                                <ul class="ul-type">
                                    <li>모집수탁자 : 「1. 개인(신용)정보의 수집&middot;이용에 관한 사항」의 정보내용</li>
                                    <li>제휴사 등 : 휴대전화번호, 생년월일</li>
                                </ul>

                                <h2>제공받는 자의 개인(신용)정보 보유&middot;이용기간</h2>
                                <ul class="ul-type">
                                    <li>모집수탁자</li>
                                    <li>당사와 보험계약 체결실적이 있는 고객 : 상기 개인(신용)정보 수집&middot;이용에 관한 사항 보유&middot;이용기간</li>
                                    <li>당사와 보험계약 체결실적이 없는 고객 : 동의일로부터 3년</li>
                                    <li>제휴사 등 : 동의일로부터 1년, 계약체결 시 체결일로부터 1년</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- //content -->
                </div>
                <!-- // container -->

            </div>
            <!-- //wrap -->
          </body>
          </html>
            `;
  return html;
};

export const termsTermsb3 = () => {
  const html = `
          <html>
          <head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
          <style type="text/css">
            ${commonCss}
            ${defaultCss}
          </style>
          </head>
          <body>
                    <!-- wrap -->
            <div id="wrap" class="pop">

                <!-- container -->
                <div id="container">
                    <!-- content -->
                    <div id="content">
                        <div class="cont-inner">                
                            <div class="term">
                                <h1 class="first">개인(신용)정보의 조회에 관한 사항(선택)</h1>
                                <div class="in-box">당사는「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 보험상품 소개 및 홍보 등을 위하여 귀하의 개인(신용)정보를 다음과 같이 수집&middot;이용하고자 합니다. 이에 대하여 동의하십니까?</div>
                                <div class="info-txt">개인(신용)정보의 수집&middot;이용 목적&middot;상품&middot;서비스 소개 및 판매, 사은&middot;판촉행사 안내(방문, 우편, 전화, SMS포함), 시장조사</div>
                                <h2>수집&middot;이용할 개인(신용)정보의 내용</h2>
                                <ul class="ul-type">
                                    <li>개인식별정보 (성명, 생년월일, 성별, 주소, 직업, 전화번호, 휴대폰전화번호, 전자우편주소, 외국인 체류자격/코드)</li>
                                    <li>보험계약 정보</li>
                                </ul>

                                <h2>개인(신용)정보의 보유&middot;이용기간</h2>
                                <ul class="ul-type">
                                    <li>당사와 보험계약 체결실적이 있는 고객 : 동의일로부터 5년 이내</li>
                                    <li>당사와 보험계약 체결실적이 없는 고객 : 동의일로부터 3년</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- //content -->
                </div>
                <!-- // container -->

            </div>
            <!-- //wrap -->
          </body>
          </html>
            `;
  return html;
};

export const termsTermsc1 = () => {
  const html = `
            <html>
            <head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
            <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
            <style type="text/css">
              ${commonCss}
              ${defaultCss}
            </style>
            </head>
            <body>
            <!-- wrap -->
                <div id="wrap" class="pop">

                    <!-- container -->
                    <div id="container">
                        <!-- content -->
                        <div id="content">
                            <div class="cont-inner">                
                                <div class="term">
                                    <h1 class="first">개인(신용)정보의 수집/이용에 관한 사항(필수)</h1>
                                    <div class="in-box">당사 및 당사 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 수집 이용하고자 합니다. 이에 대하여 동의하십니까?</div>
                                    <h2>보험료 결제 시,<br>개인(신용)정보의 수집&middot;이용 목적</h2>
                                    <ul class="ul-type">
                                        <li>보험계약의 인수심사&middot;체결&middot;유지&middot;관리(부활 및 갱신 포함), 보험금 등 지급&middot;심사</li>
                                        <li>순보험요율의 산출&middot;검증, 민원처리 및 분쟁 대응, 적부 및 사고조사(보험사기 조사 포함), 보험모집질서 유지</li>
                                        <li>보험계약 및 보험금 청구에 이해관계가 있는 자에 대한 법규 및 계약상 의무 이행</li>
                                        <li>금융거래 관련 업무(금융거래 신청, 자동이체 등)</li>
                                        <li>기존 계약자에 대한 보험계약 상담(당사 및 당사 설계사에 한함)</li>
                                    </ul>

                                    <h2>수집&middot;이용할 개인(신용)정보의 내용</h2>
                                    <ul class="ul-type">
                                        <li>개인식별정보(성명, 주민등록번호, 외국인등록번호, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소, 외국인 체류자격/코드, 운전면허정보(운전면허번호 포함), 음성정보</li>
                                        <li>당사, 신용정보집중기관 및 보험개발원에서 수집&middot;관리하는 보험계약정보, 피보험자의 질병 및 상해에 관한 정보, 보험금지급 관련 정보(사고정보, 본인의 위임을 받아 취득한 각종 조사서, 판결문, 증명서, 확인서, 진료기록 등)</li>
                                        <li>계약전 알릴의무 사항, 소득 및 재산사항</li>
                                        <li>법률 및 국제협약 등의 의무이행을 위한 정보</li>
                                        <li>금융거래 업무(보험료 및 보험금 등 출&middot;수납) 관련 정보</li>
                                    </ul>

                                    <h2>개인(신용)정보의 보유&middot;이용 기간</h2>
                                    <div class="ul-type">수집&middot;이용 동의일로부터 거래종료 후 5년까지(단, 거래종료 후 5년이 경과한 후에는 보험금 지급, 금융사고 조사, 보험사기 방지&middot;적발, 민원처리, 법령상 의무이행을 위한 경우에 한하여 보유&middot;이용하며, 별도 보관)</div>
                                </div>
                            </div>
                        </div>
                        <!-- //content -->
                    </div>
                    <!-- // container -->

                </div>
                <!-- //wrap -->
            </body>
            </html>
              `;
  return html;
};

export const termsTermsc2 = () => {
  const html = `
            <html>
            <head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
            <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
            <style type="text/css">
              ${commonCss}
              ${defaultCss}
            </style>
            </head>
            <body>
            <!-- wrap -->
                <div id="wrap" class="pop">

                    <!-- container -->
                    <div id="container">
                        <!-- content -->
                        <div id="content">
                            <div class="cont-inner">                
                                <div class="term">
                                    <h1 class="first">개인(신용) 정보의 조회에 관한 사항(필수)</h1>
                                    <div class="in-box">당사 및 당사 업무수탁자는 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에 따라 귀하의 개인(신용)정보를 다음과 같이 신용정보집중기관, 보험요율산출기관 및 국민 안전처 (소방본부, 소방서포함), 공공기관 등으로 조회하고자 합니다. 이에 동의하십니까?</div>
                                    <h2>보험료 결제 시,<br>개인(신용)정보의 조회 목적</h2>
                                    <div class="ul-type">보험계약의 인수심사&middot;체결&middot;유지&middot;관리(부활 및 갱신 포함), 보험금 등 지급&middot;심사, 보험 사고조사(보험사기조사 포함)</div>

                                    <h2>조회할 개인(신용)정보</h2>
                                    <ul class="ul-type">
                                        <li>신용정보집중기관(한국신용정보원), 생명&middot;손해보험협회 및 보험요율산출기관에서 수집&middot;관리하는 보험계약정보, 보험금지급 관련 정보(사고정보 포함), 피보험자의 질병 및 상해 관련 정보</li>
                                        <li>신용정보회사 및 통신사의 실명인증 및 본인인증을 위한 정보</li>
                                    </ul>

                                    <h2>조회동의 유효기간 및 개인(신용)정보의 보유&middot;이용 기간</h2>
                                    <div class="ul-type"> 수집 &middot; 이용 동의일로부터 거래종료 후 5년까지(단, 거래종료 후 5년이 경과한 후에는 보험금 지급, 금융사고 조사, 보험사기 방지 &middot; 적발, 민원처리, 법령상 의무이행을 위한 경우에 한하여 보유&middot;이용하며, 별도 보관)
                                        <div class="info-txt2 bk">"거래 종료일은 관계법령, 약관 또는 합의 등에 따라 계약기간의 만료, 해지권&middot;해제권&middot; 취소권의 행사, 소멸시효의 완성, 변제 등으로 인한 채권의 소멸, 그 밖의 사유로 종료된 날입니다."</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- //content -->
                    </div>
                    <!-- // container -->

                </div>
                <!-- //wrap -->
            </body>
            </html>
              `;
  return html;
};

export const termsTermsc3 = () => {
  const html = `
              <html>
              <head>
              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
              <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
              <style type="text/css">
                ${commonCss}
                ${defaultCss}
              </style>
              </head>
              <body>
              <!-- wrap -->
                <div id="wrap" class="pop">

                    <!-- container -->
                    <div id="container">
                        <!-- content -->
                        <div id="content">
                            <div class="cont-inner">                
                                <div class="term">
                                    <h1 class="first">개인(신용)정보의 제공에 관한 사항(필수)</h1>
                                    <div class="in-box">당사는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 제3자에게 제공하고자 합니다. 이에 대하여 동의하십니까?</div>
                                    <h2>보험료 결제 시,<br>개인(신용)정보를 제공받는 자</h2>
                                    <ul class="ul-type">
                                        <li>신용정보집중기관 : 한국신용정보원 등 신용정보집중기관</li>
                                        <li>공공기관 등 : 금융위원회, 국토해양부, 금융감독원, 보험요율산출기관, 경찰청 등 공공기관, 법령상 업무 수행기관(위탁사업자 포함)</li>
                                        <li>보험회사 등 : 생명&middot;손해보험사, 국내&middot;국외 재보험사, 공제사업자, 체신관서(우체국보험), 금융거래 관련 계좌개설 금융기관, 금융결제원</li>
                                        <li>간편결제 및 포인트 결제 서비스 업체 등</li>
                                        <li>업무수탁자 등 : 당사와 모집위탁계약을 체결한 자(설계사, 대리점 등), 보험중개사, 계약 체결 및 이행 등에 필요한 업무를 위탁 받은 자 (보험사고조사업체, 손해사정업체, 의료기관&middot;의사, 변호사, 위탁 콜센타, 건강보험심사평가원, 건강진단업체, 계약적부조사업체, 자동차보험 진료수가분쟁심의회, 손해보험협회 등)</li>
                                    </ul>

                                    <h2>개인(신용)정보를 제공받는 자의 이용목적</h2>
                                    <ul class="ul-type">
                                        <li>신용정보집중기관 : 보험계약 및 보험금지급 관련 정보의 집중관리 및 활용 등 신용정보집중기관의 업무</li>
                                        <li>공공기관 등 : 보험업법 및 자동차손해배상보장법, 도로교통법 등 법령에 따른 업무수행(위탁업무 포함)</li>
                                        <li>보험회사 등 : 중복보험 확인 및 비례보상, 재보험 가입 및 재보험금 청구, 보험계약 공동인수, 금융거래 업무(보험료 및 보험금 등 출&middot;수납)</li>
                                        <li>간편결제 및 포인트 결제 서비스 업체 등 : 결제 대행 업무, 포인트 결제 업무</li>
                                        <li>본인인증 및 전자서명 서비스 업체 : 본인인증 및 전자서명 대행 업무</li>
                                        <li>업무수탁자 등 : 본 계약의 체결&middot;이행관련 위탁업무 수행, 진료비심사, 의료심사 및 자문업무, 구상금분쟁심의업무, 제휴서비스 대상여부 확인</li>
                                    </ul>

                                    <h2>제공할 개인(신용)정보의 내용</h2>
                                    <div class="ul-type">「1. 개인(신용)정보의 수집&middot;이용에 관한 사항」의 정보내용</div>

                                    <h2>제공받는 자의 개인(신용)정보 보유&middot;이용기간</h2>
                                    <div class="ul-type">개인(신용)정보를 제공받는 자의 이용목적을 달성할 때까지(최대 거래종료일로부터 5년)</div>
                                </div>
                            </div>
                        </div>
                        <!-- //content -->
                    </div>
                    <!-- // container -->

                </div>
                <!-- //wrap -->
              </body>
              </html>
                `;
  return html;
};

export const termsTermsc4 = () => {
  const html = `
              <html>
              <head>
              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
              <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
              <style type="text/css">
                ${commonCss}
                ${defaultCss}
              </style>
              </head>
              <body>
              <!-- wrap -->
                <div id="wrap" class="pop">

                    <!-- container -->
                    <div id="container">
                        <!-- content -->
                        <div id="content">
                            <div class="cont-inner">                
                                <div class="term">
                                    <h1 class="first">민감정보 및 고유식별정보의 처리에 관한 사항(필수)</h1>
                                    <div class="in-box">당사 및 당사 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에 따라 상기의 개인(신용)정보에 대한 개별 동의사항에 대하여 다음과 같이 귀하의 민감정보(질병&middot;상해정보) 및 고유식별정보(주민등록번호&middot;외국인등록번호)를 처리(수집&middot;이용, 조회, 제공)하고자 합니다. 이에 동의하십니까?</div>
                                    <ul class="ul-type h-top2">
                                        <li>질병&middot;상해정보 처리</li>
                                        <li>주민등록번호, 외국인등록번호, 운전면허증번호 처리</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- //content -->
                    </div>
                    <!-- // container -->

                </div>
                <!-- //wrap -->
              </body>
              </html>
                `;
  return html;
};

export const termsTermsc5 = () => {
  const html = `
              <html>
              <head>
              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
              <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
              <style type="text/css">
                ${commonCss}
                ${defaultCss}
              </style>
              </head>
              <body>
              <!-- wrap -->
                <div id="wrap" class="pop">

                    <!-- container -->
                    <div id="container">
                        <!-- content -->
                        <div id="content">
                            <div class="cont-inner">                
                                <div class="term">
                                    <h1 class="first">전자금융거래 이용약관 동의(필수)</h1>
                                    <h2>전자거래에 관한 기본적인 사항</h2>
                                    <div class="in-txt">이 약관은 ㈜인슈로보와 이용자 사이의 전자거래에 관한 기본적인 사항을 정함으로써 거래를 신속하고 효율적으로 처리하며 거래당사자 상호간의 이해관계를 합리적으로 조정하는 것을 목적으로 합니다.</div>
                                    <h2>제1조(목적)</h2>
                                    <div class="in-txt">이 약관은 ㈜인슈로보 (이하 "회사"라 한다)와 이용자 사이의 전자거래에 관한 기본적인 사항을 정함으로써 거래를 신속하고 효율적으로 처리하며 거래당사자 상호간의 이해관계를 합리적으로 조정하는 것을 목적으로 한다.</div>
                                    <h2>제2조(정의)</h2>
                                    <ol class="ol-type numb">
                                        <li>이 약관에서 사용하는 용어의 정의는 다음 각 호와 같다.
                                            <ul class="dep2">
                                                <li>"전자금융거래"라 함은 회사가 전자적 장치를 통하여 금융상품 및 서비스를 제공하고 이용자가 회사와 직접 대면하거나 의사소통을 하지 아니하고 자동화된 방식으로 이를 이용하는 거래를 말한다.</li>
                                                <li>"이용자"라 함은 전자금융거래를 위하여 회사와 체결한 계약(이하 "전자금융거래계약" 이라 한다)에 따라 전자금융거래를 이용하는 자를 말한다.</li>
                                                <li>"전자적 장치"라 함은 전자금융거래정보를 전자적 방법으로 전송하거나 처리하는데 이용되는 장치로서 현금자동지급기, 자동입출금기, 지급용단말기, 컴퓨터, 전화기 그 밖에 전자적 방법으로 정보를 전송하거나 처리하는 장치를 말한다.</li>
                                                <li>"접근매체"라 함은 전자금융거래에 있어서 이용자가 거래지시를 하거나 또는 이용자 및 거래내용의 진실성과 정확성을 확보하기 위하여 사용되는 다음 각목의 어느 하나에 해당하는 수단 또는 정보를 말한다.
                                                    <ul class="dep3">
                                                        <li>전자식 카드 및 이에 준하는 전자적정보</li>
                                                        <li>전자서명법에 따른 공인인증서</li>
                                                        <li>회사에 등록된 이용자 번호</li>
                                                        <li>등록되어 있는 이용자의 생체정보</li>
                                                        <li>가목 또는 나목의 수단이나 정보를 사용하는데 필요한 비밀번호</li>
                                                    </ul>
                                                </li>
                                                <li>“전자문서”라 함은 전자거래기본법 제 2 조 제 1 호의 규정에 따라 작성, 송신ㆍ수신 또는 저장된 정보를 말한다.</li>
                                                <li>“거래지시”라 함은 이용자가 전자금융거래계약에 따라 회사에게 전자금융거래의 처리를 지시하는 것을 말한다.</li>
                                                <li>“오류”라 함은 이용자의 고의 또는 과실 없이 전자금융거래가 약관(개별약관을 포함한다), 전자금융거래계약 또는 이용자의 거래지시에 따라 이행되지 아니한 경우를 말한다.</li>
                                                <li>“전자지급거래”라 함은 자금을 주는 자(이하 “지급인”이라 한다)가 회사로 하여금 전자지급수단을 이용하여 자금을 받는 자(이하 “수취인”이라 한다)에게 자금을 이동하게 하는 전자금융거래를 말한다.</li>
                                                <li>“전자지급수단”이라 함은 전자자금이체, 직불전자지급수 단, 선불전자지급수단, 전자화폐, 신용카드, 전자채권 그 밖의 전자적 방법에 따른 지급수단을 말한다.</li>
                                                <li>“전자자금이체”라 함은 지급인과 수취인 사이에 자금을 지급할 목적으로 회사에 개설된 계좌에서 다른 계좌로 전자적 장치에 의하여 다음 각 목의 어느 하나에 해당하는 방법으로 자금을 이체하는 것을 말한다.
                                                    <ul class="dep3">
                                                        <li>회사에 대한 지급인의 지급지시</li>
                                                        <li>회사에 대한 수취인의 추심지시(이하 “추심이체”라 한다)</li>
                                                    </ul>
                                                </li>
                                                <li>“정보시스템”이라 함은 전자금융업무를 포함하여 정보기술부문에 사용되는 하드웨어(hardware)와 소프트웨어(software)를 말하며 관련장비를 포함한다.</li>
                                                <li>“영업일”이라 함은 회사가 영업점에서 정상적인 영업을 하는 날을 말한다.</li>
                                                <li>“개별약관”이라 함은 이 약관과 함께 전자금융거래에 적용되는 약관으로서 회사가 별도로 작성한 약관을 말한다.</li>
                                            </ul>
                                        </li>
                                        <li>이 약관에서 별도로 정하지 아니한 용어의 정의는 전자금융거래법 및 전자금융거래법 시행령, 전자금융감독규정 및 전자금융감독규정 시행세칙에서 정하는 바에 따른다.</li>
                                    </ol>
                                    <h2>제 3 조(적용범위)</h2>
                                    <div class="in-txt">이 약관은 다른 법률에 특별한 규정이 있는 경우를 제외하고 모든 전자금융거래에 적용한다.</div>
                                    <h2>제 4 조(전자금융거래계약의 체결 및 해지)</h2>
                                    <ol class="ol-type numb">
                                        <li>전자금융거래를 이용하고자 하는 이용자는 개별약관에서 정하는 방법에 따라 회사와 전자금융거래계약을 체결하여야 한다. 다만, 다음 각 호의 1 에 해당하는 경우에는 그러하지 아니할 수 있다.
                                            <ul class="dep2">
                                                <li>단순조회(보험계약사항, 간접투자상품계좌 조회 등)</li>
                                                <li>단순히 이용수수료를 납부하고 처리하는 거래</li>
                                                <li>현금자동지급기, 현금자동입/ 출금기에 의한 거래</li>
                                                <li>기타 회사가 정하는 거래</li>
                                            </ul>
                                        </li>
                                        <li>회사는 제 1 항의 규정에 의한 전자금융거래계약을 체결함에 있어 이용자에게 약관을 명시하여야 하며, 이용자의 요청이 있는 경우 다음 각 호의 어느 하나에 해당하는 방법으로 이용자에게 약관을 교부하여야 한다.
                                            <ul class="dep2">
                                                <li>직접교부</li>
                                                <li>전자문서의 전송(전자우편을 이용한 전송을 포함한다)</li>
                                                <li>모사전송</li>
                                                <li>우편</li>
                                            </ul>
                                        </li>
                                        <li>회사는 제 1 항의 규정에 의한 전자금융거래계약을 체결함에 있어 이용자가 약관의 내용에 대한 설명을 요청하는 경우 다음 각 호의 어느 하나에 해당하는 방법으로 이용자에게 약관의 중요내용을 설명하여야 한다.
                                            <ul class="dep2">
                                                <li>약관의 중요내용을 이용자에게 직접 설명</li>
                                                <li>약관의 중요내용에 대한 설명을 전자적 장치를 통하여 이용자가 알기 쉽게 표시하고 이용자로부터 해당 내용을 충분히 인지하였다는 의사표시를 전자적 장치를 통하여 수령</li>
                                            </ul>
                                        </li>
                                        <li>전자금융거래에 관한 계약을 해지하고자 할 때에는 이용자 본인이 전자금융거래에 관한 개별약관에 정한 바에 따라 서면 또는 해당 전자적 장치에 의하여 회사에 해지신청을 하여야 한다.</li>
                                    </ol>
                                    <h2>제 5 조(전자금융거래의 성립)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사가 이용자의 전자금융거래요청을 접수하고 그 내용이 회사가 정하는 정보시스템에 의해 처리되어 저장되는 때에 성립한다.</li>
                                        <li>회사는 제 1 항의 전자금융거래요청에 대한 접수사실과 그 처리결과를 이용자에게 즉시 알려야 한다.</li>
                                    </ol>
                                    <h2>제 6 조(전자지급거래의 효력발생시기 등)</h2>
                                    <ol class="ol-type numb">
                                        <li>전자지급수단을 이용하여 자금을 지급하는 경우 그 지급의 효력은 다음 각 호에서 정한 때에 발생한다.
                                            <ul class="dep2">
                                                <li>전자자금이체의 경우 : 거래지시된 금액의 정보에 대하여 수취인의 계좌가 개설되어 있는 금융기관 계좌의 원장에 입금기록이 끝난 때</li>
                                                <li>전자적 장치로부터 직접 현금을 출금하는 경우 : 수취인이 현금을 수령한 때</li>
                                                <li>선불전자지급수단 및 전자화폐로 지급하는 경우 : 거래지시된 금액의 정보가 수취인이 지정한 전자적 장치에 도달한 때</li>
                                                <li>그 밖의 전자지급수단으로 지급하는 경우 : 거래지시된 금액의 정보가 수취인의 계좌가 개설되어 있는 금융기관의 전자적 장치에 입력이 끝난 때</li>
                                            </ul>
                                        <li>이용자는 제 1 항 각 호의 규정에 따라 지급의 효력이 발생하기 전까지 거래지시를 철회할 수 있다.</li>
                                        <li>제 2 항의 규정에도 불구하고 회사는 대량으로 처리하는 거래 또는 예약에 따른 거래 등의 경우에는 개별약관에서 정한 바에 따라 거래지시의 철회시기를 달리 정할 수 있다.</li>
                                        <li>제 2 항 및 제 3 항의 규정에 의한 거래지시의 철회방법과 절차는 개별약관에서 정하는 바에 따른다.</li>
                                    </ol>

                                    <h2>제 7 조(접근매체의 발급 및 등록)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사가 접근매체를 발급할 때에는 이용자의 신청이 있는 경우에 한하여 본인임을 확인한 후에 발급하여야 한다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 이용자의 신청이나 본인의 확인이 없는 때에도 발급할 수 있다.
                                            <ul class="dep2">
                                                <li>갱신 또는 대체발급 예정일전 6 월 이내에 사용된 적이 없는 접근매체의 경우에는 그 이용자로부터 갱신 또는 대체발급에 대하여 서면(「전자서명법」 제 2 조제 3 호의 규정에 따른 공인전자서명(이하 ‘공인전자서명’이라 한다)이 있는 전자문서를 포함한다)으로 동의를 얻은 경우</li>
                                                <li>갱신 또는 대체발급 예정일전 6 월 이내에 사용된 적이 있는 접근매체의 경우에는 그 예정일부터 1 월 이전에 이용자에게 발급 예정사실을 알린 후 20 일 이내에 이용자로부터 이의제기가 없는 경우</li>
                                            </ul>
                                        <li>이용자는 전자금융거래계약을 체결하고 거래비밀번호 등을 전자적 장치를 통하여 직접 등록할 경우에는 회사가 정한 기한내에 등록하여야 한다.</li>
                                    </ol>

                                    <h2>제 8 조(접근매체의 관리)</h2>
                                    <ol class="ol-type numb">
                                        <li>이용자는 전자금융거래에 필요한 접근매체를 제 3 자에게 대여, 위탁 또는 양도하지 못한다.</li>
                                        <li>이용자는 접근매체를 본인 이외의 제 3 자에게 누설해서는 안되며, 접근매체의 도용이나 위조 또는 변조를 방지하기 위하여 충분한 주의를 기울여야 한다.</li>
                                    </ol>

                                    <h2>제 9 조(공인인증서 사용)</h2>
                                    <div class="in-txt">이용자는 이 약관의 적용대상인 전자금융거래를 이용하는 경우 전자서명법에 의한 공인인증서를 사용하여야 한다. 다만, 회사가 지정한 거래중 다음 각 호의 경우에는 그러하지 아니할 수 있다.</div>
                                    <ul class="ul-type h-top">
                                        <li>본인 계약사항 및 거래내역에 대한 조회업무</li>
                                        <li>ARS(자동응답서비스) 등과 같이 공인인증서의 설치운용이 불가능한 전자적 장치를 이용한 전자금융거래의 경우</li>
                                        <li>전자상거래의 지급결제로서 30 만원 미만의 신용카드 결제 또는 온라인 계좌이체</li>
                                    </ul>

                                    <h2>제 10 조(이용시간)</h2>
                                    <ol class="ol-type numb">
                                        <li>이용자는 회사가 정한 시간 이내에서 전자금융거래를 이용할 수 있다.</li>
                                        <li>이용시간은 회사의 사정에 따라 달라질 수 있으며, 이용시간을 변경하고자 할 경우에는 3 영업일전 본점, 영업점 또는 게시 가능하거나 기타 이용자가 접근하기 용이한 전자적 장치를 통하여 게시한다. 다만, 시스템 장애복구, 긴급한 프로그램 보수, 외부요인 등 불가피한 경우에는 예외로 한다.</li>
                                    </ol>

                                    <h2>제 11 조(수수료)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사는 전자금융거래와 관련된 각종 수수료를 이용자로부터 징수할 수 있다.</li>
                                        <li>회사는 제 1 항의 규정에 의한 수수료의 징수기준을 영업점 또는 전자적 장치에 비치 또는 게시하며, 이를 변경하고자 하는 경우 영업점 또는 전자적 장치에 변경 예정일 1 개월 전부터 1 개월 이상 비치 또는 게시한다.</li>
                                    </ol>

                                    <h2>제 12 조(이체 한도)</h2>
                                    <div class="in-txt">이용자는 회사가 정한 방법과 기준에 따라 계좌이체 및 계좌송금에 대한 이체 최고한도를 설정할 수 있다.</div>

                                    <h2>제 13 조(거래지시의 처리기준)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사는 이용자의 거래지시에 포함된 증권번호, 비밀번호, 이용자번호 등의 접근매체 정보를 신고된 것과 대조하여 그 일치 여부를 확인한 후에 거래지시를 처리한다.</li>
                                        <li>이용자의 거래지시와 관련하여 회사가 수신한 전자문서는 각 문서마다 독립된 것으로 본다.</li>
                                        <li>제 2 항의 규정에도 불구하고 거래지시 전자문서가 회사가 정한 시간내에 동일한 내용으로 반복 수신된 경우 회사는 전화 기타 이용자에게 즉시 통지할 수 있는 전자적 장치 등을 통하여 이용자의 진정한 거래지시 의사를 확인하는 절차를 거친 후 나머지 전자문서를 임의로 폐기할 수 있다.</li>
                                    </ol>

                                    <h2>제 14 조(전자금융거래의 제한)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사는 다음 각 호의 어느 하나에 해당하는 경우에는 해당 전자금융거래 전부를 제한할 수 있다.
                                            <ul class="dep2">
                                                <li>공인인증서 등의 접근매체 유효기간이 만료되었거나 공인인증서가 취소되었을 경우</li>
                                                <li>접근매체 분실, 도난 통지를 접수한 경우</li>
                                                <li>이용자가 지정한 은행계좌가 거래정지되거나 이용자가 회사에 알리지 않고 은행계좌를 임의변경하는 등의 사유로 보험료 수납이나 대출금, 보험금 등의 지급이 불가능한 경우</li>
                                            </ul>
                                        <li>회사는 제 1 항에 의해 전자금융거래를 제한한 경우에는 이용자의 거래지시가 있을 때 해당 전자적 장치을 통하여 그 사유를 알려야 한다.</li>
                                        <li>이용자는 제 2 항의 경우에 제 7 조에 의한 공인인증서 및 보안카드 재발급, 유효기간 연장 등의 절차를 거쳐 전자금융거래를 이용할 수 있다.</li>
                                    </ol>

                                    <h2>제 15 조(거래내용의 확인)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사는 전자금융거래의 처리결과를 이용자가 전자적 장치를 통하여 즉시 확인할 수 있도록 하여야 한다.</li>
                                        <li>회사는 이용자가 거래내용을 서면(전자문서를 제외한다. 이하 같다)으로 제공할 것을 요청하는 경우에는, 그 요청을 받은 날부터 2 주 이내에 거래내용에 관한 서면을 교부하여야 한다.</li>
                                        <li>제 1 항의 규정에도 불구하고 이용자가 요청하는 거래내용을 해당 전자적 장치로도 즉시 확인을 해주는 것이 사실상 곤란할 경우 회사는 해당 거래내용을 서면(전자문서를 제외한다) 형태로 출력하여 이용자에게 교부하여야 한다.</li>
                                        <li>이용자는 거래지시와 제 1 항에 의한 처리결과가 일치하는지 여부를 확인하여야 한다.</li>
                                    </ol>

                                    <h2>제 16 조(오류의 정정)</h2>
                                    <ol class="ol-type numb">
                                        <li>이용자는 전자금융거래에 오류가 있음을 안 때에는 즉시 회사에 정정을 요구할 수 있다.</li>
                                        <li>회사는 제 1 항의 규정에 따른 오류의 정정 요구를 받은 때에는 이를 즉시 조사하여 처리한 후 정정요구를 받은 날부터 2 주 이내에 그 처리결과를 이용자에게 알려야한다.</li>
                                        <li>회사는 스스로 전자금융거래에 오류가 있음을 안 때에는 이를 즉시 조사하여 처리한 후 오류가 있음을 안 날부터 2 주 이내에 이용자에게 그 결과를 알려야 한다.</li>
                                    </ol>

                                    <h2>제 17 조(사고 및 장애시의 처리)</h2>
                                    <ol class="ol-type numb">
                                        <li>이용자는 전자금융거래에 관한 접근매체가 도난, 분실, 도용, 위조 또는 변조된 사실을 알았거나 기타 거래절차상 비밀을 요하는 사항이 누설되었음을 알았을 때에는 지체없이 이를 회사에 알려야 한다.</li>
                                        <li>제 1 항의 통지는 회사가 이를 접수한 즉시 그 효력이 발생한다.</li>
                                        <li>이용자가 제 1 항의 통지를 철회할 경우에는 이용자 본인이 회사에 서면으로 신청하여야 한다.</li>
                                        <li>회사는 천재지변, 정전, 화재, 건물훼손, 전산장애 등의 사유로 이용자의 거래지시를 처리할 수 없거나 처리가 지연될 경우 동 사실과 사유 등을 이용자에게 지체없이 통보하며, 정상적인 전자금융거래가 이루어질 수 있도록 신속하게 조치한다.</li>
                                        <li>회사는 이용자의 요청이 있을 때에는 사고 또는 장애의 사유를 지체 없이 조사하여 그 결과를 이용자에게 알려야 한다.</li>
                                    </ol>

                                    <h2>제 18 조(계약내용 변경)</h2>
                                    <ol class="ol-type numb">
                                        <li>이용자는 전자적 장치를 이용하여 회사가 정한 방법과 기준에 따라 개별금융상품의 계약내용(이하 “금융계약내용” 이라 한다) 변경을 신청할 수 있다.</li>
                                        <li>회사는 제 1 항에 의한 금융계약내용 변경신청을 접수한 경우에는 이용자가 변경내용을 다시 확인할 수 있도록 하여야 한다.</li>
                                        <li>회사는 금융계약내용이 변경된 경우 이용자에게 그 사실을 전자적 장치를 통해 즉시 알려야 한다.</li>
                                    </ol>

                                    <h2>제 19 조(신고사항의 변경)</h2>
                                    <ol class="ol-type numb">
                                        <li>이용자는 주소ㆍ전화번호ㆍ비밀번호ㆍ전자우편주소ㆍ은행계좌 등 회사에 신고한 사항을 변경하고자 할 경우에는 전자적 장치나 회사가 정하는 기타의 방법에 의하여 변경신청을 하여야 한다.</li>
                                        <li>제 1 항에 의한 신고사항의 변경은 회사가 신청을 접수한 즉시 효력이 발생한다.</li>
                                    </ol>

                                    <h2>제 20 조(통지의 방법)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사는 제 16 조, 제 17 조 제 4 항 및 제 5 항에 의한 통지를 하는 경우에는 이용자가 신고한 연락처로 전화, 서면 또는 기타 전자적 장치로 알려야 한다.</li>
                                        <li>회사가 서면으로 통지하였을 경우에는 천재지변 등 불가항력적인 경우 이외에는 보통의 우송기간이 지났을 때 도달한 것으로 추정한다.</li>
                                        <li>이용자가 제 19 조에 의한 통지를 하지 아니하여 회사가 발송한 서면통지가 이용자에게 연착하거나 도달하지 아니한 때에는 보통의 우송기간이 경과한 때에 도달한 것으로 본다.</li>
                                    </ol>

                                    <h2>제 21 조(통화내용의 녹음)</h2>
                                    <div class="in-txt">회사는 거래의 정확성을 기하기 위하여 전화통화 내용을 녹음할 수 있다. 다만 녹음된 내용은 해당 거래의 분쟁이 발생할 경우의 증거자료로만 사용할 수 있으며, 이 경우 이용자는 회사에 녹음된 내용의 확인을 요구할 수 있다</div>

                                    <h2>제 22 조(거래기록의 보존 및 자료 제공 등)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사는 전자금융거래의 내용을 추적검색하거나 그 내용에 오류가 발생할 경우에 이를 확인하거나 정정할 수 있는 기록을 생성하여 전자금융거래의 성립 시점으로부터 5 년의 범위 안에서 보존하여야 한다.</li>
                                        <li>제 1 항의 규정에 따라 회사가 보존하여야 하는 기록의 종류, 보존방법 및 보존기간은 전자금융거래법시행령 제 12 조를 준용한다.</li>
                                        <li>회사는 이용자의 요청이 있을 경우 「금융실명거래 및 비밀보장에 관한 법률」 등 관계 법률에 저촉되지 않는 범위 내에서 회사가 보존관리하고 있는 전자금융거래와 관련된 기록 및 자료를 당해 이용자에게 제공하여야 한다.</li>
                                    </ol>

                                    <h2>제 23 조(손실부담 및 면책)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사는 접근매체의 위조나 변조로 발생한 사고, 계약체결 또는 거래지시의 전자적 전송이나 처리과정에서 발생한 사고, 전자금융거래를 위한 전자적 장치 또는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제 2 조 제 1 항 제 1 호에 따른 정보통신망에 침입하여 거짓이나 그 밖의 부정한 방법으로 획득한 접근매체의 이용으로 발생한 사고로 인하여 이용자에게 손해가 발생한 경우에는 그 손해를 배상할 책임을 진다.</li>
                                        <li>제 1 항의 규정에도 불구하고 회사는 다음 각호에 해당하는 경우에는 이용자에게 손해가 생기더라도 책임의 전부 또는 일부를 지지 아니한다.
                                            <ul class="dep2">
                                                <li>이용자가 접근매체를 제 3 자에게 대여하거나 사용을 위임하거나 양도 또는 담보 목적으로 제공한 경우</li>
                                                <li>제 3 자가 권한 없이 이용자의 접근매체를 이용하여 전자금융거래를 할 수 있음을 알았거나 쉽게 알 수 있었음에도 불구하고 이용자가 자신의 접근매체를 누설 또는 노출하거나 방치한 경우</li>
                                                <li>법인(「중소기업기본법」제 2 조제 2 항에 의한 소기업을 제외한다)인 이용자에게 손해가 발생한 경우로 회사가 사고를 방지하기 위하여 보안절차를 수립하고 이를 철저히 준수하는 등 합리적으로 요구되는 충분한 주의의무를 다한 경우</li>
                                            </ul>
                                        </li>
                                        <li>이용자로부터 접근매체의 분실이나 도난의 통지를 받은 경우에는 회사는 그 때부터 제 3 자가 그 접근매체를 사용함으로 인하여 이용자에게 발생한 손해를 보상한다.</li>
                                    </ol>

                                    <h2>제 24 조(이용자정보에 대한 비밀보장)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사는 관계법령에서 정한 경우를 제외하고 전자금융거래를 수행함에 있어서 알게 된 정보를 이용자 본인의 동의 없이는 타인에게 제공할 수 없다.</li>
                                        <li>회사는 이용자의 개인정보가 도난, 분실, 변조 및 유출되지 않도록 전자적 장치에 대한 보안관리에 주의를 기울여야 하며, 회사의 관리소홀로 인한 이용자 정보의 도난, 분실, 변조 및 유출시에는 회사가 책임을 진다.</li>
                                    </ol>

                                    <h2>제 25 조(약관의 명시 및 변경 등)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사가 이 약관을 변경하고자 할 때에는 변경사유, 변경내용 및 적용일자 등을 명시하여 변경일 기준 1 개월전에 게시 가능한 전자적 장치에 게시하고 이용자에게 통지하여야 한다. 다만, 법령의 개정이나 제도의 개선 등으로 인하여 긴급히 이 약관을 변경할 경우에는 즉시 이를 게시하고 통지한다.</li>
                                        <li>약관변경의 내용이 이용자에게 불리할 경우에는 변경일 기준 1 개월 전에 제 1 항에 의한 게시와 통지 외에 2 개 이상의 일간 신문에 공고하여야 한다.</li>
                                        <li>회사는 법령의 개정으로 인하여 긴급하게 약관을 변경한 때에는 변경된 약관을 전자적 장치에 최소 1 월 이상 게시하고 이용자에게 통지하는 외에 2 개 이상의 일간신문에 공고하여야 한다.</li>
                                        <li>이용자는 제 1 항 및 제 2 항의 고지 후 변경약관 시행일 전영업일까지 전자적 장치나 기타 방법에 의한 통지로 전자금융거래 계약을 해지할 수 있으며, 이 기간내에 이용자의 서면에 의한 이의가 회사에 도달하지 않으면 이용자가 이를 승인한 것으로 본다.</li>
                                    </ol>

                                    <h2>제 26 조(약관적용의 우선순위)</h2>
                                    <ol class="ol-type numb">
                                        <li>회사와 이용자 사이에 개별적으로 합의한 사항이 이 약관에서 정한 사항과 다를 때에는 그 합의사항을 이 약관에 우선하여 적용한다.</li>
                                        <li>전자금융거래에 관하여 이 약관에서 정하지 않은 사항에 대하여는 당해 개별약관 등을 적용한다.</li>
                                    </ol>

                                    <h2>제 27 조(약관의 명시 및 변경 등)</h2>
                                    <ol class="ol-type numb">
                                        <li>이용자는 전자금융거래의 처리에 관하여 이의가 있을 때에는 회사의 분쟁처리기구에 그 해결을 요구하거나 금융감독원 금융분쟁조정위원회, 한국소비자보호원 소비자분쟁조정위원회 등을 통하여 분쟁조정을 신청할 수 있다.</li>
                                        <li>이용자가 회사의 본점이나 영업점 또는 회사의 분쟁처리기구에 이의를 제기한 경우 회사는 15 일 이내에 이에 대한 조사 또는 처리결과를 이용자에게 알려야 한다.</li>
                                        <li>회사는 손해배상 등 분쟁처리를 위한 분쟁처리책임자 및 담당자를 지정하고, 그 연락처를 관련 인터넷 홈페이지 등을 통하여 이용자가 쉽게 알 수 있도록 하여야 한다.</li>
                                    </ol>

                                    <h2>제 28 조(준거법)</h2>
                                    <div class="in-txt">이 약관에서 정하지 아니한 사항은 대한민국법령을 적용합니다.</div>

                                    <h2>부칙</h2>
                                    <ul class="ul-type">
                                        <li>제1조(시행일) 이 약관은 2007년 7월 1일부터 시행한다.</li>
                                        <li>제2조(경과조항) 이 약관은 약관시행일 이후의 전자금융거래에 적용된다.</li>
                                    </ul>
                                    <h2>[전자금융거래 분쟁처리 책임자]</h2>
                                    <ul class="ul-type">
                                        <li>성명 : 서 민</li>
                                        <li>직책 : 대표</li>
                                        <li>이메일 : info@insurobo.co.kr</li>
                                        <li>전화번호 : 070-4126-3333</li>
                                    </ul>
                                    <h2>[전자금융거래 분쟁처리 담당자]</h2>
                                    <ul class="ul-type">
                                        <li>성명 : 이청수</li>
                                        <li>직책 : 사원</li>
                                        <li>이메일 : info@insurobo.co.kr</li>
                                        <li>전화번호 : 070-4126-3333</li>
                                    </ul>
                                    <ul class="dep3 h-top2">
                                        <li>전자금융거래이용약관 시행일자 : 2007.07.01.</li>
                                        <li>전자금융거래이용약관 최종변경일자 : 2017.01.17.</li>
                                    </ul>
                                    <ul class="ul-type h-top2">
                                        <li>소비자 권익보호에 관한 사항
                                            <div class="type-in">본 동의를 거부하시는 경우에는 보험계약 체결·이행등이 불가능하며, 본 동의서에 의한 개인(신용)정보조회는 귀하의 신용등급에 영향을 주지 않습니다.</div>
                                        </li>
                                        <li>예금자보호안내
                                            <div class="type-in">이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 해당 보험회사에 있는 귀하의 모든 예금보호대상 금융상품의 해약환급금(또는 만기시 보험금이나 사고보험금에 기타지급금을 합하여 1인당 “최고 5천만원”이며, 초과하는 나머지 금액은 보호되지 않습니다.</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- //content -->
                    </div>
                    <!-- // container -->

                </div>
                <!-- //wrap -->
              </body>
              </html>
                `;
  return html;
};

export const termsTermsf1 = () => {
  const html = `
                  <html>
                  <head>
                  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                  <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                  <style type="text/css">
                    ${commonCss}
                    ${defaultCss}
                  </style>
                  </head>
                  <body>
                  <!-- wrap -->
                  <div id="wrap" class="pop">
                  
                      <!-- container -->
                      <div id="container">
                          <!-- content -->
                          <div id="content">
                              <div class="cont-inner">                
                                  <div class="term">
                                      <h1 class="first">단체보험 가입 동의내용</h1>
                                      <h2>제1조 (목적)</h2>
                                      <div class="in-txt">이 규약은 ㈜밸류어블인 및 ㈜인슈로보(이하 “회사”라 합니다)가 메리츠손해보험회사(이하 "보험사"라 합니다)와 함께 회원들을 위하여 제공하는 서비스 이용에 관하여 회원들간 협약사항을 규정함을 그 목적으로 합니다.</div>
                                      
                                      <h2>제2조 (회원자격)</h2>
                                      <ol class="ol-type numb">
                                          <li>회사가 운영하는 서비스의 이용약관에 동의한 회원은 이 협약의 당사자가 됩니다.</li>
                                          <li>회원의 자격득실 등에 관하여는 각 이용약관에서 정하는 바에 따릅니다.</li>
                                      </ol>
                                      
                                      <h2>제3조 (단체보험가입 청약 등)</h2>
                                      <ol class="ol-type numb">
                                          <li>회사는 회원을 위하여 ㈜밸류어블인이 계약자로서 보험사와 단체보험계약을 체결할 수 있습니다.</li>
                                          <li>㈜밸류어블인을 계약자로 하는 단체보험계약에 피보험자로 가입하기를 희망하는 회원은 소정의 절차에 따라 보험가입신청(보험청약)을 합니다.</li>
                                          <li>회원 본인은 회사의 회원을 대상으로 가입하는 단체주택화재보험을 체결함에 있어 회원을 대신하여 ㈜밸류어블인이 일괄적으로 가입하는 것에 동의합니다.</li>
                                          <li>보험청약을 하고자 하는 회원은 보험약관, 알아두실 사항 등을 충분히 읽고 이해한 후 청약을 하며, 보험사와 회사가 고지를 요구하는 사항에 대하여 성실히 답합니다.</li>
                                          <li>회원이 가입하는 보험의 수익자는 사망시 – 법적상속인, 그외 –보험가입자(피보험자) 본인이 됩니다.</li>
                                          <li>회사가 계약한 단체주택화재보험에 관하여 기타 이 규약에서 정하지 않은 사항은 회사가 보험사와 약정한 바에 따릅니다.</li>
                                      </ol>
                                      
                                      <h2>제4조 (소비자 권익보호에 관한 사항)</h2>
                                      <div class="in-txt">본 동의를 거부하시는 경우에는 보험계약 등 정상적인 서비스 제공이 불가능하며 본 동의서에 의한 개인(신용)정보 조회는 귀하의 신용 등급에 영향을 주지 않습니다. 또한, 동의하시더라도 당사 홈페이지 및 고객센터(070-4126-3333)로 보험계약 상담 목적의 연락에 대한 중단을 요청하실 수 있습니다.</div>
                                      
                                      <h2>제5조 (기타사항)</h2>
                                      <ol class="ol-type numb">
                                          <li>회사의 기존 서비스 변경, 새로운 서비스 출시, 법령의 개폐, 회원 요구 등의 사정이 있어 이 규약을 변경할 필요가 있는 경우, 회사의 회원들을 위하여 규약을 즉시 변경합니다. 그리고 변경된 규약은 그 즉시 효력을 발합니다.</li>
                                          <li>회사는 규약변경을 위해 필요한 경우 회원들에게 의견을 구할 수 있으며, 회원들은 이에 성실히 응합니다.</li>
                                          <li>규약변경을 희망하는 회원은 회사의 그 구체적 변경안과 이유를 제시하여 규약변경을 제안할 수 있습니다. 이에 대하여는 회사는 전항에 따라 처리합니다.</li>
                                          <li>회사는 단체보험가입 등 규약에 직접적으로 영향을 받는 서비스를 이용하는 회원에게는 개별적으로 규약적용에 부동의 하는지 의견을 구합니다. 이때 규약에 부동의 하는 회원은 해당서비스를 이용하지 않거나, 회원 탈퇴를 할 수 있습니다.</li>
                                      </ol>
                                      
                                  </div>
                              </div>
                          </div>
                          <!-- //content -->
                      </div>
                      <!-- // container -->
                  
                  </div>
                  <!-- //wrap -->
                  </body>
                  </html>
                    `;
  return html;
};

export const termsTermsSd = () => {
  const html = `
                    <html>
                    <head>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                    <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                    <style type="text/css">
                      ${commonCss}
                      ${defaultCss}
                    </style>
                    </head>
                    <body>
                    <!-- wrap -->
                    <div id="wrap" class="pop">

                        <!-- container -->
                        <div id="container">
                            <!-- content -->
                            <div id="content">
                                <div class="cont-inner">                
                                    <div class="term">
                                        <h2>(필수) 기타 설명</h2>
                                        <div class="in-txt">고객은 본 주택종합보험 상품의 자주하는 질문 및 이용에 관한 기타 부가 설명을 숙지하였으며 이에 동의합니다.</div>
                                        
                                        <h2>(필수) 해지 사고 접수 안내</h2>
                                        <div class="in-txt">고객은 본 주택종합보험 상품의 사고 접수 및 보험금 청구에 관한 사항을 숙지하였고 확인하였으며 이에 동의합니다.</div>
                                        
                                        <h2>(필수) 통신수단 해지 동의</h2>
                                        <div class="in-txt">향후 해지 요청 및 업무처리를 전화 등의 통신 매체로 처리하시는 것을 확인하였으며 이에 동의합니다.</div>
                                        
                                    </div>
                                </div>
                            </div>
                            <!-- //content -->
                        </div>
                        <!-- // container -->

                    </div>
                    <!-- //wrap -->

                    </body>
                    </html>
                      `;
  return html;
};

export const termsTermsSd1 = () => {
  const html = `
                      <html>
                      <head>
                      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                      <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                      <style type="text/css">
                        ${commonCss}
                        ${defaultCss}
                      </style>
                      </head>
                      <body>
                      <!-- wrap -->
                        <div id="wrap" class="pop">


                            <!-- container -->
                            <div id="container">
                                <!-- content -->
                                <div id="content">
                                    <div class="cont-inner">                
                                        <div class="term">
                                            <h1 class="first">보험상품 가입시 확인사항</h1>
                                            <div class="in-box">본 주택종합보험은 단체보험으로 계약자 밸루어블인, 피보험자는 인슈로보 회원 중 가입 고객이 되며, 연말정산 소득공제 대상 상품이 아닙니다.</div>
                                            <h2>1. 보험계약 체결 전 유의사항</h2>
                                            <ul class="ul-type">
                                                <li>보험계약을 청약할 때는 보험상품명, 보험기간, 보험료 납입기간, 피보험자 등을 반드시 확인하시고, 인터넷 등을 통해 상품설명서와 보험약관을 확인해 보거나 설계사, 상담원에게 수령 후 설명을 받으시기 바랍니다.</li>
                                                <li>기존 보험계약을 해지하고 새로운 보험계약을 체결하는 경우에 보험인수가 거절되거나 보험료가 인상될 수 있으며, 보장내용이 달라질 수 있으니 유의하시기 바랍니다.</li>
                                            </ul>
                                            <h2>2. 보험계약의 무효</h2>
                                            <div class="in-txt">다음 중 한 가지에 해당하면 계약을 무효로 하며 이미 납입한 보험료는 돌려드립니다.</div>
                                            <ul class="ul-type h-top">
                                                <li>타인의 사망을 보험금 지급사유로 하는 계약에서 계약을 체결할 때까지 피보험자(보험대상자)의 서면에 의한 동의를 얻지 않은 경우</li>
                                                <li>만 15세 미만자, 심신상실자 또는 심신박약자의 사망을 보험금 지급사유로 한 경우</li>
                                                <li>계약 체결 시 계약에서 정한 피보험자(보험대상자)의 나이에 미달되었거나 초과되었을 경우</li>
                                            </ul>
                                            <h2>3. 보험계약자의 자필 서명 의무</h2>
                                            <ul class="ul-type">
                                                <li>청약서는 보험계약자 본인이 작성하고 서명란에도 보험계약자 본인 및 피보험자가 자필 서명을 하여야 합니다. 자필서명을 하지 않으신 경우 보험계약의 효력 등과 관련 하며 불이익이 있을 수 있습니다.</li>
                                                <li>인터넷을 통해 직접 보험에 가입하시는 경우에는 공동인증서 등을 통한 전자서명으로 자필서명을 대신할 수 있습니다.</li>
                                                <li>전화로 가입할 때는 계약자와 피보험자가 동일하고 수익자가 본인이거나 상속인인 경우에 한해 녹취로 자필서명을 대신할 수 있습니다.</li>
                                            </ul>
                                            <h2>4. 가입자의 계약 전후 알릴 의무</h2>
                                            <ul class="ul-type">
                                                <li>가입자의 계약 전 알릴 의무
                                                    <div class="dep3">계약자 또는 피보험자 등은 보험계약 청약 시 기재사항 및 질문사항에 대하여 사실대로 알려주셔야 하며 그렇지 않은 경우 보험금 지급이 거절되거나 계약이 해지될 수 있습니다.</div>
                                                </li>
                                                <li>가입자의 계약 후 알릴 의무
                                                    <div class="dep3">계약자 또는 피보험자 등은 보험계약을 맺은 후 보험약관에 정한 계약 후 알릴 의무사항이 발생하였을 경우(청약서 기재사항 변경 시, 동일한 위험을 보장하는 계약을 체결할 경우, 위험이 뚜렷이 변경되었을 경우, 주소 또는 연락처가 변경된 경우)지체 없이 회사에 알라고 보험증권(보험가입증서)에 확인을 받아야 합니다. 그렇지 않을 경우 보험금지급이 거절될 수 있습니다.</div>
                                                </li>
                                            </ul>

                                            <h2>5. 청약의 철회와 품질보증제도</h2>
                                            <ul class="ul-type">
                                                <li>청약의 철회<br>
                                                    보험계약자는 보험증권을 받은 날부터 15일 이내 보험계약의 청약을 철회할 수 있습니다. 이 경우 보험회사는 보험계약자의 청약철회를 접수한 날부터 3일 이내에 받은 보험료를 보험계약자에게 돌려 드립니다. 다만, 다음 중 어느 하나에 해당하는 경우에는 보험계약의 청약을 철회할 수 없습니다.
                                                    <ol class="ol-type numb dep">
                                                        <li>①청약한 날부터 30일이 초과된 계약</li>
                                                        <li>②진단계약</li>
                                                        <li>③보험기간이 1년 미만인 계약</li>
                                                        <li>④전문보험계약자가 체결한 계약</li>
                                                    </ol>
                                                </li>
                                                <li>품질보증제도
                                                    <div class="dep3">회사는 계약자가 청약할 때에 계약자에게 약관의 중요한 내용을 설명하며, 청약 후에 지체 없이 약관 및 가입확인서를 드립니다.<br>
                                                        다만, 계약자가 동의하는 경우 광기록 매체, 전자우편 등 전자적 방법으로 송부할 수 있으며, 계약자 또는 그 대리인이 약관 및 계약자 보관용 청약서 등을 수신했을 때에는 해당 문서를 드린 것으로 봅니다. 계약자가 청약한 경우 약관과 계약자 보관용 청약서를 청약 시 전달받지 못하거나 약관의 중요한 내용을 설명 받지 못한 때 또는 청약서에 자필서명을 하지 않은 때에는 계약자는 계이 성립한 날부터 3개월 이내에 계약을 취소할 수 있습니다. 이 경우 이미 납입한 보험료에 보험료를 받은 기간에 대해 이 계약의 보험계약대출이율을 연단위 복리로 계산한 금액을 더하여 지급합니다.
                                                    </div>
                                                </li>
                                            </ul>
                                            <h2>6. 무배당 보험의 특징</h2>
                                            <div class="in-txt">무배당 보험은 배당이 발생하지 않는 대신 배당 상품과 비교하여 일반적으로 보험료가 저렴합니다.</div>


                                            <h2>7.해지 환급금이 납입보험료 보다 적은 이유</h2>
                                            <ul class="ul-type">
                                                <li>해지환급금은 보험계약이 중도에 해지될 경우에 지급되는 금액을 말합니다.</li>
                                                <li>보험은 은행의 저축과 달리 위험보장과 저축을 겸비한 제도로서 보험계약자가 납입한 보험료 중 일부는 불의의 사고를 당한 다른 가입자에게 지급되는 보험금으로, 또 다른 일부는 보험회사 운영에 필요한 경비로 사용되므로 중도 해지 시 지급되는 해지환급금은 납입한 보험료보다 적거나 없을 수도 있습니다.
                                                    <div class="info-txt2 bk" font-color="red">이 상품은 만기환급금이 없는 상품입니다.</div>
                                                </li>
                                            </ul>
                                            <h2>8.비용보험의 비례보상에 관한 사항</h2>
                                            <div class="in-txt">이 계약에서 보장하는 위험과 같은 위험을 보장하는 다른 계약(공제계약 포함)이 있을 경우에는 각 계약에 대하여 다른 계약이 없는 것으로 하여 각각 산출한 보상 책임액의 합계액이 손해액을 초과할 때에는 이 계약에 의한 보상 책임액의 상기 합계액에 대한 비율에 따라 보상하여 드립니다.</div>

                                            <h2>9.보험료 납입 연체에 대한 납입최고(독촉)과 계약의 해지</h2>
                                            <div class="in-txt">보험료 납입이 연체 중인 경우에 회사는 14일(보험기간이 1년 미만인 경우에는 7일 이상의 기간을 납입최고(독촉) 기간으로 정하며 보험계약자(타인을 위한 보험계약의 경우 특정된 보험수익자(보험금을 받는 자)포함)에게 납입최고 (독촉기간 내에 연체 보험료를 납입하여야 한다는 내용과 납입최고 (독촉)기간이 끝나는 날까지 보험료 를 납입하지 아니할 경우 납입최고(독촉)기간이 끝나는 날의 다음날에 계약이 해지된다는 내용을 서면 (등기부 편 등), 전화(음성녹음) 또는 전자문서 등으로 알려드립니다.</div>
                                            <ol class="ol-type numb dep">
                                                <li>①보험계약자가 약정한 납입일자까지 제2회 이후의 분할보험료를 납입하지 않는 때에는 약정한 납입일이 속하는 달의 다음 달 말일까지 납입최고기간을 둡니다. 회사는 이 납입최고기간 안에 생긴 사고에 대하여는 보상합니다.</li>
                                                <li>②위 '①'의 납입최고기간 안에 분할보험료를 납입하지 않는 때에는 납입최고기간이 끝나는 날의 24시부터 보험 계약은 해지됩니다.</li>
                                                <li>③보험계약자가 약정한 납입일자까지 분할보험료를 납입하지 않는 경우, 회사는 보험계약자 및 기명피보험자에게 납입최고기간이 끝나는 날 이전에 위 '1'및'2'의 의 내용을 서면으로 최고합니다. 이때 보험계약자 또는 피보험자가 보통약관 제45조(계약 후 알릴 의무)에 따라 주소변경을 통보하지 않는 한 보험증권에 기재된 보험계약자 또는 기명피보험자의 주소를 회사의 의사표시를 수령할 지정장소로 합니다.</li>
                                            </ol>

                                            <h2>10.예금자보호 안내</h2>
                                            <div class="in-txt">이 보험계약은 예금자보호법에 따라, 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 있는 귀하의 모든 예금보호 대상 금융상품의 해약환급금(또는 만기 시 보험금이나 사고보험금)에 기타 지급금을 합하여 1인당 "최고 5천만원" 이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다. (단, 보험계약자 또는 보험료납부자가 법인인 경우 예금자보호법에 따라 예금보험공사가 보호하지 않습니다.</div>

                                            <h2>11.모집질서 확립 및 신고센터 안내</h2>
                                            <ul class="ul-type">
                                                <li>보험계약과 관련한 특별이익제공 행위 및 보험모집질서 문란행위는 보험업법에 의해 처벌받을 수 있습니다</li>
                                                <li>금융감독원 보험모집질서 위반행위 신고센터
                                                    <ul class="dep3">
                                                        <li>전화 : 1332</li>
                                                        <li>인터넷 : www.fss.or.kr</li>
                                                    </ul>
                                                </li>    
                                            </ul>

                                            <h2>12.상담 및 보험분쟁조정 안내</h2>
                                            <ul class="ul-type">
                                                <li>가입한 보험에 관하며 상담이 필요하거나 불만 사이 있을 때에는 먼저 저희 회사로 연락주시면 신속히 해결 하겠습니다.
                                                    <ul class="dep3">
                                                        <li>전화 : 1566-7711, (02)6464-3535, 3522번</li>
                                                        <li>인터넷 : www.meritzfire.com -&gt; 고객센터 -&gt; 전자민원 접수</li>
                                                    </ul>
                                                </li>    
                                                <li>저희 회사의 처리결과에 이의가 있으시면 금융감독원 금융소비자보호센터에 민원 또는 분쟁조정 등을 신청하실 수 있습니다.
                                                    <ul class="dep3">
                                                        <li>전화 : 국번없이 1332, (02)3145-5114</li>
                                                        <li>인터넷 : www.fss.or.kr</li>
                                                    </ul>
                                                </li>    
                                            </ul>

                                            <h2>13.금융감독원 보험범죄 신고센터 안내</h2>
                                            <ul class="ul-type">
                                                <li>가입한 보험에 관하며 상담이 필요하거나 불만 사항이 있을 때에는 먼저 저희 회사로 연락주시면 신속히 해결 하겠습니다.
                                                    <ul class="dep3">
                                                        <li>전화 : 1566-7711, (02)6464-3535, 3522번</li>
                                                        <li>인터넷 : www.meritzfire.com -> 고객센터 -> 전자민원 접수</li>
                                                    </ul>
                                                </li>                        
                                                <li>보험범죄는 형법 제347조 (사기)에 의거 10년 이하의 징역이나 2천만원 이하의 벌금에 처해지며, 보험범죄를 교사한 경우에도 동일한 처벌을 받을 수 있습니다.
                                                    <ul class="dep3">
                                                        <li>전화 : 1588-3311</li>
                                                        <li>인터넷 : www.fss.or.kr 인터넷보험범죄신고</li>
                                                    </ul>
                                                </li>                        
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- //content -->
                            </div>
                            <!-- // container -->

                        </div>
                        <!-- //wrap -->
  
                      </body>
                      </html>
                        `;
  return html;
};

export const termsTermsSd2 = () => {
  const html = `
                      <html>
                      <head>
                      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                      <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                      <style type="text/css">
                        ${commonCss}
                        ${defaultCss}
                      </style>
                      </head>
                      <body>
                      <!-- wrap -->
                        <div id="wrap" class="pop">


                            <!-- container -->
                            <div id="container">
                                <!-- content -->
                                <div id="content">
                                    <div class="cont-inner">                
                                        <div class="term">
                                            <h1 class="first">상품 보장 내용 설명</h1>
                                            <div class="in-box">아파트,연립,다세대 단독,다가구 주택 및 그 건물에 수용된 가재도구를 우연하고 급격한 외래의 물리적 사고로 생긴 손해를 보장하는 상품입니다.</div>
                                            <h2>기본정보</h2>
                                            <div class="tbl">
                                                <table>
                                                    <colgroup>
                                                        <col style="width:25%">
                                                        <col style="width:75%">
                                                    </colgroup>
                                                    <tbody>
                                                        <tr>
                                                            <th>가입자격</th>
                                                            <td>주택건물 소유자/점유자(임차인)</td>
                                                        </tr>
                                                        <tr>
                                                            <th>보장형태</th>
                                                            <td>실손보장형</td>
                                                        </tr>
                                                        <tr>
                                                            <th>보험기간</th>
                                                            <td>1년</td>
                                                        </tr>
                                                        <tr>
                                                            <th>납입방법</th>
                                                            <td>일시납</td>
                                                        </tr>
                                                        <tr>
                                                            <th>상품형태</th>
                                                            <td>순수보장형(만기시 환급금 없음)</td>
                                                        </tr>   
                                                        <tr>
                                                            <th>보험목적물</th>
                                                            <td>
                                                                주택 건물, 가재도구<br>
                                                                <div class="info-txt">금, 보석, 귀금속 귀중품 등 명기가재는 가입불가</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <h2>기본계약</h2>
                                            <div class="tbl">
                                                <table>
                                                    <colgroup>
                                                        <col style="width:25%">
                                                        <col style="width:75%">
                                                    </colgroup>
                                                    <tbody>
                                                        <tr>
                                                            <th>보장명</th>
                                                            <td>재물위험 손해 (건물 및 가재)</td>
                                                        </tr>
                                                        <tr>
                                                            <th>보장내용<br>(지급사유)</th>
                                                            <td>우연한 사고(화재.폭발,파열 붕괴)등으로 인한 손해 발생 시 가입 금액 한도 내 보상</td>
                                                        </tr>
                                                        <tr>
                                                            <th>보장금액<br>(보험금액)</th>
                                                            <td>가입금액 한도</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <h2>선택 계약</h2>
                                            <div class="tbl">
                                                <table>
                                                    <colgroup>
                                                        <col style="width:25%">
                                                        <col style="width:75%">
                                                    </colgroup>
                                                    <tbody>
                                                        <tr>
                                                            <th rowspan="3">보장명</th>
                                                            <td>가재 도난 위험</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bl">잠금장치 교체비용</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bl">실화(대물) 배상책임</td>
                                                        </tr>
                                                        <tr>
                                                            <th rowspan="3">보장내용<br>(지급사유)</th>
                                                            <td>주택 구내의 가재(보험목적) 보관되어 있는 동안에 절도 & 손해(그 미수를 포함합니다)로 생긴 도난, 훼손 또는 망가진 손해 를 입었을 경우 
                                                                <div class="info-txt">자기부담금 3만원 공제</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bl">가재도난 위험담보에 따라 보험금이 지급된 경우 보험가입금액을 잠금장치 교체비용으로 지급</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bl">피보험자의 주택 구내에서 발생한 화재사고로 인하여 타인의 재물을 손괴하며 배상책임이 발생한 경우 보상한도액 내에서 보상. 단, 피보험자가 소유,점유,임차,보험,관리,통제하는 재물의 경우는 보상불가</td>
                                                        </tr>
                                                        <tr>
                                                            <th rowspan="3">보장금액<br>(보험금액)</th>
                                                            <td>가입금액 한도</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bl">가입금액</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bl">가입금액 한도</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <h2>지급보험금 산정방식</h2>
                                            <div class="in-txt">추정예상보험가액 평가는 간접평가법에 의하여 예상재조달가액을 산출하는 것이므로 실제 사고 발생시 적용하는 직접평가법에 의하여 산출할 보험가액과는 차이가 발생할 수 있습니다. 사고 시점에서 보험가입금액이 보험가액보다 적을 경우 부보비율에 따라서 비례보상이 될수 있습니다.</div>
                                            <ul class="ul-type h-top">
                                                <li>재조달가액은 현재와 동일한 용도 및 구조로 신축하는데 소요되는 비용이며, 시가액은 재조달가액에서 사용 년수만큼 감가공제한 금액입니다.</li>                            
                                                <li>예상재조달가액 산출을 위해 사용되는 표준단가에는 전기설비,소방설비,위생,난방설비 등의 부대설비 가액 이(1.1~1.3%)보정되어 있습니다.</li>
                                                <li>비례보상에 관한 사항
                                                    <div class="dep3">재물위험 손해, 가재도난위험, 실화배 상위험 담보의 경우는 다수 계약시 중복보험으로 인해 비례보상이 되며 잠금장치 교체비용에 대해서는 다수 계약시 비례보상되지 않습니다.</div>
                                                </li>                            
                                                <li>추정 보험가액 예시
                                                    <div class="dep3">예상재조달가액 : 연면적(m2) × 표준단가</div>
                                                </li>
                                                <li>건물 재조달가액 산출방법
                                                    <div class="dep3">[건물의 용도 / 구조별 적정 건축물신축단가 × 면적] × 보정계수(1.1~1.3)</div>
                                                </li>
                                                <li>예상시가액 
                                                    <div class="dep3">예상재조달가액 - 감가공제액(예상재조달가액 × 경년감가율 × 경과년수)</div>
                                                </li>
                                                <li>보험료 예시
                                                    <ul class="dep3">
                                                        <li>평가한 보험가액(건물연면적 × 재조달가액) × 보험요율 = 보험료</li>
                                                        <li>건물 : 벽돌조슬라브 84m2 × 1,100,000원 × 0.0236% = 21,806원</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <h2>보상하지 않는 손해</h2>
                                            <div class="in-txt">회사는 그 원인의 직접, 간접을 묻지 아니하고 아래의 사유로 생긴 손해는 보상하여 드리지 아니합니다.</div>
                                            <ul class="ul-type h-top">
                                                <li>책임개시전 사고
                                                    <div class="dep3">회사는 계약의 청약을 승낙하고 제1회 보험료 등을 받는 때부터 약관이 정한 바에 따라 보장을 합니다. 따라서, 다른 약정이 없는 한 보험료를 받기 전에 생긴 손해에 대해서는 회사의 책임이 없습니다.</div>
                                                <li>계약자나 피보험자 또는 이들의 대리인의 고의
                                                    <div class="dep3">보험계약자나 피보험자 또는 이들의 대리인의 고의 중대한 과실로 생긴 손해, 기타 약관에서 정한 보상하지 아니하는 손해에 해당되는 경우 회사는 책임을 지지 아니합니다. (약관 참조)</div>
                                                </li>
                                            </ul>
                                            <div class="tbl">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>승인번호</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="ac">손해보험협회 심의필 제24857호(2019.12.02)</td>
                                                        </tr>                                
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- //content -->
                            </div>
                            <!-- // container -->

                        </div>
                        <!-- //wrap -->                         
  
                      </body>
                      </html>
                        `;
  return html;
};

export const houseProductInfoHtml = () => {
  const html = `
                          <html>
                          <head>
                          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                          <style type="text/css">
                            ${commonCss}
                            ${defaultCss}
                          </style>
                          </head>
                          <body>
                          <!-- header -->
                            <header id="header">
                                <h1>상품안내 및 보장내용 자세히 보기</h1>
                                <div class="btn-close"><button type="button"><span class="ir">닫기</span></button></div>
                            </header>
                            <!-- //header -->

                            <!-- container -->
                            <div id="container">

                                <!-- content -->
                                <div id="content">
                                    <div class="cont-inner">                
                                        <div class="term">
                                            <h2 class="first">1.상품안내</h2>
                                            <ol class="ol-type">
                                                <li>우연하고 급격한 외래의 물리적 사고(화재, 폭발, 파열, 붕괴 등)로 생긴 손해를 보장</li>
                                                <li>건물, 가재도구 등의 피해를 보장</li>
                                                <li>특약 가입시 급배수누출손해, 유리손해, 대물배상책임, 가재도난위험, 잠금장치교체 비용 보장</li>
                                            </ol>
                                            <h2>2.보장내용</h2>
                                            <ol class="ol-type">
                                                <li>가입 대상
                                                    <ul class="dep2">
                                                        <li>아파트(15층 이하), 연립주택, 다세대 주택, 단독주택, 다가구 주택</li>
                                                        <li>보험 목적물 : 주택건물, 가재도구(보석, 귀금속, 귀중품 등 명기가재는 가입불가)</li>
                                                    </ul>
                                                <li>보장 형태
                                                    <div class="dep2">실본보상형</div>
                                                </li>
                                                <li>보장내용
                                                    <div class="tbl">
                                                        <table>
                                                            <colgroup>
                                                                <col style="width:15%">
                                                                <col style="width:25%">
                                                                <col style="width:40%">
                                                                <col style="width:20%">
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th>구분</th>
                                                                    <th>보장명</th>
                                                                    <th>보장내용</th>
                                                                    <th>보장금액</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th>기본<br>보장</th>
                                                                    <td class="ac">재물위험손해<br>(건물 및 가재도구)</td>
                                                                    <td>우연한 사고(화재, 폭발, 파열, 붕괴 등)로 인한 손해 발생시 가입금액 한도 내 보상</td>
                                                                    <td>가입금액 한도</td>
                                                                </tr>
                                                                <tr>
                                                                    <th rowspan="3">특약<br>보장</th>
                                                                    <td class="ac">가재도난위험</td>
                                                                    <td>주택 구내의 가재(보험목적)로 보관되어 있는 동안에 강도 또는 절도(그 미수를 포함)로 생긴 도난, 훼손 또는 망가진 손해를 입었을 경우
                                                                        <div class="type-in">자기부담금 3만원 공제</div>
                                                                    </td>
                                                                    <td>가입금액 한도</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ac bl">잠금장치 교체비용</td>
                                                                    <td>가재도난 위험담보에 따라 보험금이 지급된 경우 보험가입금액을 잠금장치 교체비용으로 지급</td>
                                                                    <td>가입금액</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ac bl">대물배상책임위험</td>
                                                                    <td>피보험자의 주택 구내에서 발생한 화재사고로 인하여 타인의 재물을 손괴하여 배상책임이 발생한 경우 보한한도액 내에서 보상.<br>
                                                                        단, 피보험자가 소유, 점유, 임차, 관리, 통제하는 재물의 경우는 보상 불가.</td>
                                                                    <td>가입금액 한도</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </li>
                                                <li>보상하는 손해
                                                    <ul class="dep2">
                                                        <li>잔존물 제거 비용 
                                                            <div class="type-in">사고현장에서의 잔존물의 해체비용, 청소비용, 및 상차 비용. 단, 증권에서 보장하지 않는 위험으로 인한 손해는 보상하지 않음</div>
                                                        </li>
                                                        <li>손해방지비용
                                                            <div class="type-in">손해의 방지 또는 경감을 위하여 지출한 필요 또는 유익한 비용</div>
                                                        </li>
                                                        <li>대위권 보전 비용
                                                            <div class="type-in">제3자로부터 손해의 배상을 받을 수 있는 경우에는 그 권리를 지키거나 행사하기 위하여 지출한 필요 또는 유익한 비용</div>
                                                        </li>
                                                        <li>잔존물 보전비용
                                                            <div class="type-in">잔존물을 보전하기 위하여 지출한 필요 또는 유익한 비용. 단 회사가 잔존물을 취득한 경우에 한함</div>
                                                        </li>
                                                        <li>기타 협력비용 
                                                            <div class="type-in">회사의 요구에 따르기 위하여 지출한 필요 또는 유익한 비용<br>
                                                                [청소비용] → 사고현장 및 인근 지역의 토양, 대기 및 수질 오염 물질 제거비용과 상차 후 폐기물 처리비용은 포함되지 않음
                                                                <div class="info-txt bk">기타 자세한 내용은 약관의 내용을 따릅니다.</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                            <h2>3.유의사항</h2>
                                            <ol class="ol-type">
                                                <li>보상하지 않는 손해
                                                    <ul class="dep2">
                                                        <li>계약자, 피보험자 또는 이들의 법정대리인의 고의 또는 중대한 과실로 생긴 손해</li>
                                                        <li>피보험자에게 보험금이 지급되도록 하기 위하여 피보험자의 친족 또는 고용인이 고의로 일으킨 손해</li>
                                                        <li>지진 또는 분화 등의 천재지변으로 생긴 손해</li>
                                                        <li>전쟁, 외국의 무력행사, 혁명, 내란, 사변, 폭동, 테러 또는 기타 이들과 유사한 사태로 생긴 손해</li>
                                                        <li>핵연료물질 또는 핵연료 물질에 의하여 오염된 물질의 방사성, 폭발성 그 밖의 유해한 특성 또는 이들의 특성에 의한 사고로 인한 손해 또는
                                                            <br>방사선을 쬐는것(照射) 또는 방사능 오염으로 인한 손해
                                                        </li>
                                                        <li>태풍, 회오리바람, 폭풍, 폭풍우, 홍수, 해일, 범람 및 이와 비슷한 풍재 또는 수재로 보험의 목적에 생긴 손해<br>
                                                            단, 건물에 부착된 유리는 풍재 또는 수재로 인한 손해를 보상하며, 수조, 급배수설비(헤드, 배관, 경보장치, 탱크, 펌프 및 이의 부속기구 포함하지 않음) 또는
                                                            수관(이하 「급배수설비」)이 우연한 사고로 인해 누수 또는 방수됨에 따라 보험의 목적에 생긴 손해는 보상함
                                                        </li>
                                                        <li>자연발열, 자연발화, 마모, 내재적 결함, 재질 변경, 녹 및 부식, 누설, 쥐, 곤충, 해충, 기후·온도 조건의 변화, 통상적인 해수면의 변화, 기타 점진적으로 작용하는 원인으로 생긴 손해. 단, 자연발열 또는 자연발화로 연소된 다른 보험의 목적에 생긴 손해는 보상함</li>
                                                        <li>법률적으로 또는 실질적으로 정부 및 공공기관의 행위나 명령에 의한 몰수, 국유화, 징발, 파괴 또는 손상으로 생긴 손해</li>
                                                        <li>공공설비(전기, 가스, 통신, 수도 또는 기타 에너지원)의 공급불능, 불량으로 발생한손해</li>
                                                        <li>도난, 망실 또는 분실 손해. 단, 절도 또는 강도행위로 발생한 건물의 파손 손해는 보상함</li>
                                                        <li>외부적 힘에 의하지 않은 부속설비 및 가재에 생긴 손해</li>
                                                        <li>피보험자나 고용인의 잘못된 운영이나 잘못된 기술로 인하여 전기․기계장비에 생긴 손해</li>
                                                        <li>가재 또는 유리(건물에 부착된 유리 제외)의 파손 손해. 다만 화재, 낙뢰, 폭발, 붕괴, 사태, 자동차나 항공기와의 충돌, 항공기로부터 낙하물체와의 충돌, 소요, 노동쟁의, 피보험자 또는 이들 법정대리인이 아닌 자의 고의적이고 악의적인 행위로 인한 파손 손해는 보상함</li>
                                                        <li>발전기, 여자기(정류기 포함), 변류기, 변압기, 전압조정기, 축전기, 개폐기, 차단기, 피뢰기, 배전반 및 그 밖의 전기기기 또는 장치의 전기적 사고로 생긴 손해<br>단, 그 결과로 생긴 손해는 보상함</li>
                                                        <li>기관, 기기, 증기기관, 내연기관, 유압기 등의 물리적인 폭발, 파열이나 기계의 운동 부분 또는 회전부분이 분해되어 날아 흩어짐으로 인해 생긴 손해
                                                            <ul class="dep3">
                                                                <li>[핵연료 물질] → 사용된 연료를 포함</li>
                                                                <li>[핵연료 물질에 의해 오염된 물질] → 원자핵 분열 생성물을 포함</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>보험모집질서위반
                                                    <ul class="dep2">
                                                        <li>보험계약 청약과 관련 특별이익을 제공하는 등 보험모집질서 위반행위는 보험업법에 의해 처벌 받을 수 있습니다.</li>
                                                        <li>금육감독원 위반행위 신고 센터
                                                            <ul class="dep3">
                                                                <li>전화 : 국번없이 <a href="tel:1332">1332</a></li>
                                                                <li>휴대전화 : <a href="tel:02-1332">02-1332</a></li>
                                                                <li>인터넷 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a> 내 “보험모집질서위반신고”</li>
                                                            </ul>
                                                        </li>
                                                        <li>손해보험협회
                                                            <ul class="dep3">
                                                                <li>전화 : <a href="tel:02-3702-8585">02-3702-8585</a></li>
                                                                <li>팩스 : 02-3702-8691</li>
                                                                <li>인터넷 : <a href="https://www.knia.or.kr/main" target="_blank">www.knia.or.kr</a> 내 “모집질서문란 신고센터＂</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>보험료 환급
                                                    <div class="dep2">순수 보장성 상품으로 만기 시 환급금이 없습니다.
                                                        <div class="info-txt2 bk">
                                                            기타 자세한 사항은 약관의 내용을 따릅니다.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>보험계약상의 알릴 의무
                                                    <ul class="dep2">
                                                        <li>계약 전 알릴 의무
                                                            <div class="dep3">
                                                            계약을 맺을 때에 계약자, 피보험자 또는 이들의 대리인은 계약 청약서(질문서를 포함. 이하 동일)의 기재사항에 관하여 아는 사실을 빠짐없이
                                                            그대로 회사에 알려야 합니다. 인터넷 계약의 경우 입력사항을 정확하게 기재해 주셔야 합니다.
                                                            </div>
                                                        </li>
                                                        <li>계약 후 알릴 의무
                                                            <ul class="dep3">
                                                                <li>이 계약에서 담보하는 위험과 동일한 위험에 대해서 다른 회사와 다른 계약을 맺을 때</li>
                                                                <li>보험의 목적물을 양도할 때</li>
                                                                <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 구조를 변경, 개축, 증축하거나 계속하여 15일 이상 수선하는 경우</li>
                                                                <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 용도를 변경함으로써 위험이 변경하는 경우</li>
                                                                <li>보험의 목적인 건물 또는 보험의 목적이 들어있는 건물을 계속하여 30일 이상 비워 두거나 휴업하는 경우</li>
                                                                <li>위 이외의 위험이 뚜렷이 증가할 경우</li>
                                                                <li>알릴 의무를 위반하신 경우 계약을 해지하거나 보험금 지급이 제한될 수 있습니다.
                                                                    <div class="info-txt2 bk">
                                                                        기타 자세한 사항은 약관의 내용을 따릅니다.
                                                                    </div>
                                                                </li>
                                                            </ul>                                    
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>3대 기본 지키기 및 계약자 의무사항
                                                    <ul class="dep2">
                                                        <li>자필서명 (인터넷 계약은 공동인증을 통해 대체될 수 있음)</li>
                                                        <li>청약서 부본전달 (인터넷 계약은 예외)</li>
                                                        <li>보험약관전달 (인터넷 계약은 이메일 등 전자적 수단에 의해 전달될 수 있음)
                                                            <div class="info-txt2 bk">3대 기본 지키기 미이행시는 계약성립일로부터 3개월 이내에 계약을 취소할 수 있습니다.</div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>청약철회 청구제도
                                                    <ul class="dep2">
                                                        <li>보험계약자는 보험증권을 받은 날부터 15일 이내에 그 청약을 철회할 수 있으며, 이 경우 3일 이내에 보험료를 돌려드립니다.<br>
                                                        다만, 진단계약, 보험기간이 1년 미만인 계약 또는 전문보험계약자가 체결한 계약 및 청약을 한 날로부터 30일을 초과하는 경우에는 청약을 철회할 수 없습니다.<br>
                                                        청약철회 기간 내에 청약철회를 하실 경우 납입한 보험료 전액을 돌려받으실 수 있습니다.
                                                        </li>
                                                        <li>전문보험계약자
                                                            <div class="dep3">
                                                                보험계약에 관한 전문성, 자산규모 등에 비추어 보험계약의 내용을 이해하고 이행할 능력이 있는 자로서 보험업법 제2조(정의),
                                                                보험업법시행령 제6조의 2(전문보험계약자의 범위 등) 도는 보험업감독규정 제1-4조의 2(전문보험계약자의 범위)에서 정한 국가, 한국은행, 
                                                                대통령령으로 정하는 금융기관, 주권상장법인, 지방자치단체, 단체보험계약자 등의 전문보험계약자를 말합니다.
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>상담 및 보험분쟁조정안내
                                                    <ul class="dep2">
                                                        <li>보험에 대한 문의사항 및 불만사항이 있을 경우 현대해상(전화 <a href="tel:1588-5656">1588-5656</a> / 인터넷 <a href="https://www.hi.co.kr/index.jsp" target="_blank">hi.co.kr</a> &gt; 전자민원접수) 또는
                                                            인슈로보(전화 <a href="tel:070-4126-3333">070-4126-3333</a> / 카카오톡채널 “인슈로보”)로 연락주시면 신속하게 처리해 드립니다.<br>
                                                            또한 보험에 관한 분쟁이 있을 때에는 금융감독원 및 한국소비자원에 분쟁조정을 신청하실 수 있습니다.
                                                        </li>
                                                        <li>금융감독원
                                                            <ul class="dep3">
                                                                <li>전화 : <a href="tel:1332">1332</a></li>
                                                                <li>홈페이지 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a></li>
                                                                <li>e-금융센터 : <a href="https://www.fcsc.kr/" target="_blank">www.fcsc.kr</a>)</li>
                                                            </ul>
                                                        </li>
                                                        <li>한국소비자원
                                                            <ul class="dep3">
                                                                <li>전화 : <a href="tel:1372">1372</a></li>
                                                                <li>홈페이지 : <a href="https://www.kca.go.kr/home/main.do" target="_blank">www.kca.go.kr</a>)</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <li>계약자배당에 관한 사항
                                                        <div class="dep2">무배당 상품으로 배당을 하지 않습니다.</div>
                                                    </li>
                                                    <li>보험계약체결
                                                        <ul class="dep2">
                                                            <li>보험계약 체결 전에 상품설명서 및 약관을 읽어 보시기 바랍니다.</li>
                                                            <li>기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 안상 또는 보장내용이 달라질 수 있습니다.</li>
                                                        </ul>
                                                    </li>
                                                    <li>예금자 보호안내
                                                        <div class="dep2">
                                                            이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 귀하의 모든 예금보호 대상 금융상품의
                                                            해약환급금(또는 만기시 보험금이나 사고 보험금)에 기타지급금을 합하여 1인당 “최고 5천만원＂이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.
                                                            또한, 보험계약자 및 보험료 납부자가 법인이면 보호되지 않습니다.
                                                            <div class="info-txt2 bk">
                                                                위 내용은 예금자보호법 및 관련 법령의 개정에 따라 달라질 수 있으며, 자세한 내용은 예금보험공사(<a href="http://www.kdic.or.kr/main.do" target="_blank">www.kdic.or.kr</a>)로 문의 바랍니다.
                                                            </div>
                                                        </div>
                                                    </li>
                                                </li>
                                            </ol>       
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                            <!-- // container -->

                        </div>
                        <!-- //wrap -->
                          </body>
                          </html>
                            `;
  return html;
};

export const productInfoHtml = () => {
  const html = `
                    <html>
                    <head>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                    <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                    <style type="text/css">
                      ${commonCss}
                      ${defaultCss}
                    </style>
                    </head>
                    <body>
                    <!-- wrap -->
                    <!-- header -->
                    <header id="header">
                        <h1>상품안내 및 보장내용 자세히 보기</h1>
                        <div class="btn-close"><button type="button"><span class="ir">닫기</span></button></div>
                    </header>
                    <div id="wrap" class="pop">
                        <!-- container -->
                        <div id="container">
                        <!-- //header -->

                            <!-- content -->
                            <div id="content">
                           
                                <div class="cont-inner">                
                                    <div class="term">
                                        <h2 class="first">1.상품안내</h2>
                                        <ol class="ol-type">
                                            <li>자연재해 사고 보장
                                                <div class="type-in">
                                                    8대 자연재해(태풍, 홍수, 호우, 해일, 강풍, 풍랑, 대설, 지진) 사고 발생시 실손비용 보상
                                                </div>
                                            </li>
                                            <li>일부 보험료를 정부에서 지원
                                                <div class="type-in">
                                                    국가 및 지방자치단체에서 보험료의 일부를 지원<br>
                                                    (최소 70% 지원. 지방자지단체별 추가 지원 다름)
                                                </div>
                                            </li>
                                            <li>순수 보장성 상품으로 만기시 환급금 없음</li>
                                        </ol>
                                        <h2>2.보장내용</h2>
                                        <ol class="ol-type">
                                            <li>풍수해
                                                <ul class="dep2">
                                                    <li>기상청 특보 발표 기준
                                                        <div class="tbl">
                                                            <table>
                                                                <colgroup>
                                                                    <col style="width:10%">
                                                                    <col style="width:20%">
                                                                    <col style="width:80%">
                                                                </colgroup>
                                                                <thead>
                                                                    <tr>
                                                                        <th colspan="2">구분</th>
                                                                        <th>내용</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th colspan="2">태풍</th>
                                                                        <td>태풍으로 인하여 강풍, 풍랑, 호우, 폭풍해일 현상 등이 주의보 기준에 도달할 것으로 예상될 때</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th colspan="2">호우</th>
                                                                        <td>3시간 강우량 50mm이상 예상되거나 12시간 강우량이 110mm이상 예상될 때</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th colspan="2">홍수</th>
                                                                        <td>홍수예보지점의 수위가 계속 상승하여 주의보수위를 초과할 것이 예상되는 경우</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th colspan="2">강풍</th>
                                                                        <td>육상에서 12m/s 이상 또는 순산풍속 20m/s 이상이 될 때. 단, 산지는 풍속이 17m/ 이상 또는 순간풍속 25m/s 이상이 예상될 때</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th colspan="2">풍랑</th>
                                                                        <td>해상에서 풍속 14m/s 이상이 3시간 이상 지속되거나 유의파고가 3m이상이 예상될 때</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th rowspan="2">해일</th>
                                                                        <th>폭풍<br>해일</th>
                                                                        <td>천문조, 폭풍, 저기압 등의 복합적인 영향으로 해수면이 상승하여 발효기준값 이상이 예상될 때. 다만, 발효기준값은 지역별로 별도 지정</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th class="bl">지진<br>해일</th>
                                                                        <td>한반도 주변해역(21˚N ~ 45˚N, 110˚E ~ 145˚E)등에서 규모 6.0이상의 해저지진이 발생하여 우리나라 해안가에 해일파고 0.5m이상의 지진해일 내습이 예상될 때</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th colspan="2">대설</th>
                                                                        <td>24시간 신적설이 5cm 이상이 예상될 때</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th colspan="2">지진</th>
                                                                        <td>국내 내륙에서 규모 3.5이상 또는 국내 해역에서 규모 4.0 이상으로 추정되는 자연지진이 발생하거나, 국외에서 발행한 지연지진으로 인하여 피해가 예상되는 경우</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="info-txt2 bk">향후, 기상청 특보 발표기준 등이 변경되면 풍수해보험의 보상하는 재해기준도 동일하게 적용</div>
                                                    </li>
                                                    <li>보장내용
                                                        <ul class="dep3">
                                                            <li>일반물건 
                                                                <div class="type-in">
                                                                    보험가입금액 한도내 실손보상<br>
                                                                    (건물/시설은 합계 1억원 한도, 재고자산은 5천만원 한도)
                                                                </div>
                                                            </li>
                                                            <li>공장물건
                                                                <div class="type-in">
                                                                    보험가입금액 안도내 실손보상<br>
                                                                    (건물/기계는 합계 1.5억원 한도, 재고자산은 5천만원 한도)
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>지급기준
                                                        <div class="dep3">
                                                            태풍, 호우, 홍수, 강풍, 풍랑, 해일, 지진, 대설로 보험 목적물에 손해가 발생한 경우 손해를 보상(자기부담금액 제외)
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>손해방지비용
                                                <ul class="dep2">
                                                    <li>보험가입금액과 별개로 추가지급</li>
                                                    <li>손해의 방지 또는 경감을 위해 지출한 필요 또는 유익한 비용</li>
                                                </ul>
                                            </li>
                                            <li>잔존물보존비용
                                                <ul class="dep2">
                                                    <li>보험가입금액과 별개로 추가지급</li>
                                                    <li>회사에 잔존물을 넘기는 경우 잔존물을 보전하기 위하여 지출한 필요 또는 유익한 비용</li>
                                                </ul>
                                            </li>
                                            <li>잔존물제거비용
                                                <ul class="dep2">
                                                    <li>풍수해로 인한 보험금과 잔존물 제거비용의 합계액은 보험증권에 기재된 보험가입금액한도.<br>단, 잔존물 제거비용은 손해액의 10%를 초과할 수 없음.</li>
                                                    <li>풍수해로 잔존물제거비용이 발생한 경우 보상
                                                        <p class="info-txt2 bk">잔존물 제거비용 : 잔존물의 해체비용, 청소비용, 상차비용</p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>대위권 보전비용
                                                <ul class="dep2">
                                                    <li>보험가입금액과 별개로 추가지급</li>
                                                    <li>제3자로부터 손해배상을 받을 권리가 있는 경우 권리를 지키거나 행사하기 위해 지출한 필용 또는 유익한 비용</li>
                                                </ul>
                                            </li>
                                            <li>기타협력비용
                                                <ul class="dep2">
                                                    <li>보험가입금액과 별개로 추가지급</li>
                                                    <li>회사의 요구를 따르기 위하여 지출한 필요 또는 유익한 비용</li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <h2>3.유의사항(보험가입시 유의사항)</h2>
                                        <ol class="ol-type">
                                            <li>보험금 지급제한 사항
                                                <ul class="dep2">
                                                    <li>아래와 같은 손해는 보상하지 않음.
                                                        <ul class="dep3">
                                                            <li>계약자, 피보험자(보험대상자, 법인인 경우에는 그 이사 또는 법인의 업무를 집행하는 그 밖의 기관) 또는 이들의 법정대리인의 고의 또는 중대한 과실</li>
                                                            <li>풍수해가 발생했을 때 생긴 도난, 또는 분실로 생긴 손해</li>
                                                            <li>보험 목적의 노후 및 하자로 생긴 손해</li>
                                                            <li>풍수해로 생긴 화재, 폭발 손해(단, 지진으로 인해 발생한 화재손해는 보상)</li>
                                                            <li>한파, 서리, 얼음, 우박으로 인한 손해</li>
                                                            <li>축대, 제방 등의 붕괴로 인한 손해(단, 붕괴의 직접원인이 이 약관에 의하여 보상되는 사고일 때에는 보상)</li>
                                                            <li>침식활동 및 지하수로 인한 손해</li>
                                                            <li>보험계약일 현재 이미 진행 중인 태풍, 호우, 홍수, 강풍, 풍랑, 해일, 대설, 지진으로 인한 손해
                                                                <div class="type-in">
                                                                    [이미 진행 중]<br>
                                                                    → 보험기간 중에 보험의 목적이 위치하고 있는 지역에 기상청(홍수통제소 포함) 기상특보(주의보, 경보) 또는 에비특보 발령시점을 기준으로 합니다.
                                                                </div>                                    
                                                            </li>
                                                            <li>온실 시설의 단순 피복재(비닐 등) 파열(단, 단순비닐파손특약에 가입한 경우는 제외)</li>
                                                            <li>소파 미만의 손해(주택의 경우 침수는 보상)</li>
                                                            <li>전쟁, 내란, 폭동, 소요, 노동쟁의 등으로 인한 손해</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>보험모집질서위반
                                                <ul class="dep2">
                                                    <li>보험계약 청약과 관련 특별이익을 제공하는 등 보험모집질서 위반행위는 보험업법에 의해 처벌 받을 수 있습니다.</li>
                                                    <li>금육감독원 위반행위 신고 센터
                                                        <ul class="dep3">
                                                            <li>전화 : 국번없이 <a href="tel:1332">1332</a></li>
                                                            <li>휴대전화 : <a href="tel:02-1332">02-1332</a></li>
                                                            <li>인터넷 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a> 내 “보험모집질서위반신고”</li>
                                                        </ul>
                                                    </li>
                                                    <li>손해보험협회
                                                        <ul class="dep3">
                                                            <li>전화 : <a href="tel:02-3702-8585">02-3702-8585</a></li>
                                                            <li>팩스 : 02-3702-8691</li>
                                                            <li>인터넷 : <a href="https://www.knia.or.kr/main" target="_blank">www.knia.or.kr</a> 내 “모집질서문란 신고센터＂</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>보험료 환급
                                                <div class="dep2">순수 보장성 상품으로 만기 시 환급금이 없습니다. 
                                                    <div class="info-txt2 bk">
                                                        기타 자세한 사항은 약관의 내용을 따릅니다.
                                                    </div>
                                                </div>
                                            </li>
                                            <li>보험계약상의 알릴 의무
                                                <ul class="dep2">
                                                    <li>계약 전 알릴 의무
                                                        <div class="dep3">
                                                        계약을 맺을 때에 계약자, 피보험자 또는 이들의 대리인은 계약 청약서(질문서를 포함. 이하 동일)의 기재사항에 관하여 아는 사실을 빠짐없이
                                                        그대로 회사에 알려야 합니다. 인터넷 계약의 경우 입력사항을 정확하게 기재해 주셔야 합니다.
                                                        </div>
                                                    </li>
                                                    <li>계약 후 알릴 의무
                                                        <ul class="dep3">
                                                            <li>이 계약에서 담보하는 위험과 동일한 위험에 대해서 다른 회사와 다른 계약을 맺을 때</li>
                                                            <li>보험의 목적물을 양도할 때</li>
                                                            <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 구조를 변경, 개축, 증축하거나 계속하여 15일 이상 수선하는 경우</li>
                                                            <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 용도를 변경함으로써 위험이 변경하는 경우</li>
                                                            <li>보험의 목적인 건물 또는 보험의 목적이 들어있는 건물을 계속하여 30일 이상 비워 두거나 휴업하는 경우</li>
                                                            <li>위 이외의 위험이 뚜렷이 증가할 경우</li>
                                                            <li>알릴 의무를 위반하신 경우 계약을 해지하거나 보험금 지급이 제한될 수 있습니다.
                                                                <div class="info-txt2 bk">
                                                                    기타 자세한 사항은 약관의 내용을 따릅니다.
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>3대 기본 지키기 및 계약자 의무사항
                                                <ul class="dep2">
                                                    <li>자필서명 (인터넷 계약은 공동인증을 통해 대체될 수 있음)</li>
                                                    <li>청약서 부본전달 (인터넷 계약은 예외)</li>
                                                    <li>보험약관전달 (인터넷 계약은 이메일 등 전자적 수단에 의해 전달될 수 있음)
                                                        <div class="info-txt2 bk">3대 기본 지키기 미이행시는 계약성립일로부터 3개월 이내에 계약을 취소할 수 있습니다.</div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>청약철회 청구제도
                                                <ul class="dep2">
                                                    <li>보험계약자는 보험증권을 받은 날부터 15일 이내에 그 청약을 철회할 수 있으며, 이 경우 3일 이내에 보험료를 돌려드립니다.<br>
                                                    다만, 진단계약, 보험기간이 1년 미만인 계약 또는 전문보험계약자가 체결한 계약 및 청약을 한 날로부터 30일을 초과하는 경우에는 청약을 철회할 수 없습니다.<br>
                                                    청약철회 기간 내에 청약철회를 하실 경우 납입한 보험료 전액을 돌려받으실 수 있습니다.
                                                    </li>
                                                    <li>전문보험계약자
                                                        <div class="dep3">
                                                            보험계약에 관한 전문성, 자산규모 등에 비추어 보험계약의 내용을 이해하고 이행할 능력이 있는 자로서 보험업법 제2조(정의),
                                                            보험업법시행령 제6조의 2(전문보험계약자의 범위 등) 도는 보험업감독규정 제1-4조의 2(전문보험계약자의 범위)에서 정한 국가, 한국은행, 
                                                            대통령령으로 정하는 금융기관, 주권상장법인, 지방자치단체, 단체보험계약자 등의 전문보험계약자를 말합니다.
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>상담 및 보험분쟁조정안내
                                                <ul class="dep2">
                                                    <li>보험에 대한 문의사항 및 불만사항이 있을 경우 현대해상(전화 <a href="tel:1588-5656">1588-5656</a> / 인터넷 <a href="https://www.hi.co.kr/index.jsp" target="_blank">hi.co.kr</a> &gt; 전자민원접수) 또는
                                                        인슈로보(전화 <a href="tel:070-4126-3333">070-4126-3333</a> / 카카오톡채널 “인슈로보”)로 연락주시면 신속하게 처리해 드립니다.<br>
                                                        또한 보험에 관한 분쟁이 있을 때에는 금융감독원 및 한국소비자원에 분쟁조정을 신청하실 수 있습니다.
                                                    </li>
                                                    <li>금융감독원
                                                        <ul class="dep3">
                                                            <li>전화 : <a href="tel:1332">1332</a></li>
                                                            <li>홈페이지 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a></li>
                                                            <li>e-금융센터 : <a href="https://www.fcsc.kr/" target="_blank">www.fcsc.kr</a>)</li>
                                                        </ul>
                                                    </li>
                                                    <li>한국소비자원
                                                        <ul class="dep3">
                                                            <li>전화 : <a href="tel:1372">1372</a></li>
                                                            <li>홈페이지 : <a href="https://www.kca.go.kr/home/main.do" target="_blank">www.kca.go.kr</a>)</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <li>계약자배당에 관한 사항
                                                    <div class="dep2">무배당 상품으로 배당을 하지 않습니다.</div>
                                                </li>
                                                <li>보험계약체결
                                                    <ul class="dep2">
                                                        <li>보험계약 체결 전에 상품설명서 및 약관을 읽어 보시기 바랍니다.</li>
                                                        <li>기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 안상 또는 보장내용이 달라질 수 있습니다.</li>
                                                    </ul>
                                                </li>
                                                <li>예금자 보호안내
                                                    <div class="dep2">
                                                        이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 귀하의 모든 예금보호 대상 금융상품의
                                                        해약환급금(또는 만기시 보험금이나 사고 보험금)에 기타지급금을 합하여 1인당 “최고 5천만원＂이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.
                                                        또한, 보험계약자 및 보험료 납부자가 법인이면 보호되지 않습니다.
                                                        <div class="info-txt2 bk">
                                                            위 내용은 예금자보호법 및 관련 법령의 개정에 따라 달라질 수 있으며, 자세한 내용은 예금보험공사(<a href="http://www.kdic.or.kr/main.do" target="_blank">www.kdic.or.kr</a>)로 문의 바랍니다.
                                                        </div>
                                                    </div>
                                                </li>
                                            </li>
                                        </ol>       
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <!-- // container -->

                    </div>
                    <!-- //wrap -->
                    </body>
                    </html>
                      `;
  return html;
};

export const productInfoHtml2 = () => {
  const html = `
                      <html>
                      <head>
                      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                      <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                      <style type="text/css">
                        ${commonCss}
                        ${defaultCss}
                      </style>
                      </head>
                      <body>
                      <!-- wrap -->
                        <div id="wrap" class="pop">

                            <!-- header -->
                            <div class="headers">
                                <h1 class="headerh1">주요 업종별 연평균 매출액</h1>
                            </div>
                            <!-- //header -->

                            <!-- container -->
                            <div id="container">

                                <!-- content -->
                                <div id="content">			
                                    <div class="cont-inner">
                                        <div class="tbl">
                                            <table>
                                                <colgroup>
                                                    <col style="width:80%">
                                                    <col style="width:20%">
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>주요업종</th>
                                                        <th>규모<br>기준</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>식료품제조업</td>
                                                        <td rowspan="17" class="ac">평균매출액 등 120억원 이하</td>
                                                    </tr>
                                                    <tr>
                                                        <td>음료 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>의복, 의복액세서리 및 모피제품 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>가죽, 가방 및 신발 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>코크스, 연탄 및 석유 정제품 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>화학물질 및 화학제품 제조업(의약품 제조업은 제외)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>의료용 물질 및 의약품 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>비금속 광물 제품 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1차 금속 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>금속가공제품 제조업(기계 및 가구제조업은 제외)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>전자부품, 컴퓨터, 영상, 음향 및 통신장비 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>전기장비 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>그 밖의 기계 및 장비 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>자동차 및 트레일러 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>가구 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>전기, 가스, 증기 및 공기조절 공급업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>수도업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>농업, 임업 및 어업</td>
                                                        <td rowspan="14" class="ac">80억원 이하</td>
                                                    </tr>
                                                    <tr>
                                                        <td>광업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>담배 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>석유제품 제조업(의복 제조업은 제외)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>목재 및 나무제품 제조업(가구 제조업은 제외)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>펄프, 종이 및 종이제품 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>인쇄 및 기록 매체 복제업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>고무제품 및 플라스틱제품 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>의료, 정밀, 광학기기 및 시계 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>그 밖의 운송장비 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>그 밖의 제품 제조업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>건설업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>운수 및 창고업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>금융 및 보험업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>도매 및 소매업</td>
                                                        <td rowspan="2" class="ac">50억원 이하</td>
                                                    </tr>
                                                    <tr>
                                                        <td>정보통신업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>수도, 하수 및 폐기물 처리, 원료 재생업</td>
                                                        <td rowspan="5" class="ac">30억원 이하</td>
                                                    </tr>
                                                    <tr>
                                                        <td>부동산업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>전문·과학 및 기술 서비스업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>사업시설관리, 사업지원 및 임대 서비스업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>예술, 스포츠 및 여가 관련 서비스업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>산업용 기계 및 장비 수리업</td>
                                                        <td rowspan="5" class="ac">10억원 이하</td>
                                                    </tr>
                                                    <tr>
                                                        <td>숙박 및 음식점업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>교육 서비스업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>보험업 및 사회복지 서비스업</td>
                                                    </tr>
                                                    <tr>
                                                        <td>수리(修理) 및 기타 개인 서비스업</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>
                            <!-- // container -->

                         
                        </div>
                        <!-- //wrap -->
                      </body>
                      </html>
                        `;
  return html;
};

export const productInfoHtml3 = () => {
  const html = `
                        <html>
                        <head>
                        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                        <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                        <style type="text/css">
                          ${commonCss}
                          ${defaultCss}
                        </style>
                        </head>
                        <body>
                        <!-- wrap -->
                        <div id="wrap" class="pop">

                            <!-- header -->
                            <div class="headers">
                                <h1 class="headerh1">꼭!! 알아 두실 사항</h1>
                            </div>
                            <!-- //header -->

                            <!-- container -->
                            <div id="container">

                                <!-- content -->
                                <div id="content">
                                    <div class="cont-inner">                
                                        <ul class="ul-type">
                                            <li>가입자는 법률상 소상공인으로 일반 물건인 경우 건물 또는 시설(비품 포함)을 총 1억원 한도로 가입 가능하며,</li>
                                            <li>공장 물건인 경우 건물 또는 기계를 총 1.5억원 한도까지 가입 가능합니다.</li>                
                                            <li>재고자산은 최대5천만원으로 가입 가능합니다.<br>
                                                <div class="info-txt">
                                                재고자산 : 원/부재료, 재공품, 반제품, 제품, 부산물, 상품과 저장품 및 이와 비슷한 것
                                                </div>
                                            </li>
                                            <li>소재지와 건물 구조에 따라 보험료가 달라집니다.</li>                    
                                            <li class="primary">보험 개시는 가입일로부터 7일 후 부터 개시됩니다.</li>                    
                                            <li>지하소재물건 및 옥외 간판(건물 벽체와 분리된 입간판)의 경우 가입이 제외됩니다.</li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- //content -->
                            </div>
                            <!-- // container -->

                        </div>
                        <!-- //wrap -->
                        </body>
                        </html>
                          `;
  return html;
};

export const wwTermsSb1 = () => {
  const html = `
                        <html>
                        <head>
                        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                        <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                        <style type="text/css">
                          ${commonCss}
                          ${defaultCss}
                        </style>
                        </head>
                        <body>
                        <!-- wrap -->
                        <div id="wrap" class="pop">

                            <!-- container -->
                            <div id="container">
                                <!-- content -->
                                <div id="content">
                                    <div class="cont-inner">                
                                        <div class="term">
                                            <h1 class="first">소비자 권익에 관한 사항</h1>
                                            <div class="in-box">본 동의를 거부하시는 경우에는 보험계약 상담 등 정상적인 서비스제공이 불가능하며 본 동의서에 의한 개인(신용) 정보 조회는 귀하의 신용등급에 영향을 주지 않습니다. 또한, 동의하시더라도 인슈로보 고객센터(070-4126-3333) 또는 현대해상 홈페이지 및 고객콜센터(1577-1001)를 통해 철회하거나 보험계약상담 목적의 연락에 대한 중단을 요청하실 수 있습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- //content -->
                            </div>
                            <!-- // container -->

                        </div>
                        <!-- //wrap -->
    
                        </body>
                        </html>
                          `;
  return html;
};

export const wwTermsSb2 = () => {
  const html = `
                          <html>
                          <head>
                          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                          <style type="text/css">
                            ${commonCss}
                            ${defaultCss}
                          </style>
                          </head>
                          <body>
                          <!-- wrap -->
                            <div id="wrap" class="pop">

                                <!-- container -->
                                <div id="container">
                                    <!-- content -->
                                    <div id="content">
                                        <div class="cont-inner">                
                                            <div class="term">
                                                <h1 class="first">개인(신용)정보의 수집/이용에 관한 사항</h1>
                                                <div class="in-box">현대해상 및 현대해상 업무수탁자는 「개인정보 보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 본 계약과 관련하여 귀하의 개인(신용)정보를 다음과 같이 수집&middot;이용하고자 합니다. 이에 대하여 동의하십니까?</div>
                                                <h2>개인(신용)정보의 수집&middot;이용 목적</h2>
                                                <ul class="ul-type">
                                                    <li>보험계약상담, 보험계약 인수여부 결정을 위한 판단, 다중이용업소화재배상책임보험 가입대상 확인, 재무설계서비스, 실손의료보험계약&middot;기타손해보험계약 등 ‘실제 발생하는 손해만을 보상하는 실손형 보험’의 중복가입 확인을 위한 보험가입내역 조회</li>
                                                    <li>민원 및 분쟁관련 대응, 만기알람서비스 신청 고객의 보험만기 안내</li>
                                                </ul>
                                                <h2>수집&middot;이용할 개인(신용) 정보의 내용</h2>
                                                <ul class="ul-type">
                                                    <li>개인식별정보 (성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 직업, 전화번호, 전자우편주소)</li>
                                                    <li>질병 및 상해에 관한 정보(자동차보험은 해당없음)</li>
                                                    <li>현대해상, 신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 보험계약정보 및 보험금지급 관련 정보(사고정보 포함)</li>
                                                    <li>다중이용업소정보(상호, 업종, 영업장 면적, 주소, 소방방재청 발급 일련번호)</li>
                                                    <li>소득에 관한 정보(보험료 또는 담보별 누적 가입금액이 과도한 경우)</li>
                                                </ul>
                                                <h2>개인(신용)정보 보유&middot;이용기간</h2>
                                                <div class="ul-type">수집&middot;동의일로부터 1년까지</div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- //content -->
                                </div>
                                <!-- // container -->

                            </div>
                            <!-- //wrap -->
      
                          </body>
                          </html>
                            `;
  return html;
};

export const wwTermsSb3 = () => {
  const html = `
                          <html>
                          <head>
                          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                          <style type="text/css">
                            ${commonCss}
                            ${defaultCss}
                          </style>
                          </head>
                          <body>
                          <!-- wrap -->
                          <div id="wrap" class="pop">
                          
                              <!-- container -->
                              <div id="container">
                                  <!-- content -->
                                  <div id="content">
                                      <div class="cont-inner">                
                                          <div class="term">
                                              <h1 class="first">개인(신용) 정보의 조회에 관한 사항(필수)</h1>
                                              <div class="in-box">현대해상 및 현대해상 업무수탁자는 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에 따라 귀하의 개인(신용)정보를 다음과 같이 신용정보집중기관, 보험요율산출기관, 공공기관 등으로부터 조회하고자 합니다. 이에 대하여 동의하십니까?</div>
                                              <h2>개인(신용)정보의 조회목적</h2>
                                              <div class="ul-type">보험계약상담, 보험계약 인수여부 결정을 위한 판단, 다중이용업소화재배상책임보험, 실손의료보험계약&middot;기타손해보험계약 등 ‘실제 발생하는 손해만을 보상하는 실손형 보험'의 중복가입 확인</div>
                                              <h2>조회할 개인(신용)정보의 내용</h2>
                                              <ul class="ul-type">
                                                  <li>신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 정보(피보험자의 질병 및 상해에 관한 정보(자동차보험은 해당없음), 보험계약정보, 보험금지급정보)</li>
                                                  <li>개인식별정보 (성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 직업, 전화번호, 전자우편주소)</li>
                                                  <li>다중이용업소정보</li>
                                                  <li>신용정보회사 및 통신사 등의 실명인증 및 본인인증을 위한 정보</li>
                                              </ul>
                                              <h2>조회동의 유효 기간 및 조회자(개인(신용)정보를 제공 받은 자)의 보유&middot;이용 기간</h2>
                                              <div class="ul-type">동의일로부터 보험계약의 청약시까지(최대 1년)</div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- //content -->
                              </div>
                              <!-- // container -->
                          
                          </div>
                          <!-- //wrap -->
      
                          </body>
                          </html>
                            `;
  return html;
};

export const wwTermsSb4 = () => {
  const html = `
                          <html>
                          <head>
                          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                          <style type="text/css">
                            ${commonCss}
                            ${defaultCss}
                          </style>
                          </head>
                          <body>
                          <!-- wrap -->
                            <div id="wrap" class="pop">

                                <!-- container -->
                                <div id="container">
                                    <!-- content -->
                                    <div id="content">
                                        <div class="cont-inner">                
                                            <div class="term">
                                                <h1 class="first">개인(신용)정보의 제공에 관한 사항(필수)</h1>
                                                <div class="in-box">당사 및 현대해상은 「개인정보 보호법」 및 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에 따라 귀하의 개인(신용)정보를 다음과 같이 제3자에게 제공하고자 합니다. 이에 대하여 동의하십니까?</div>
                                                <h2>개인(신용)정보를 제공받는자</h2>
                                                <ul class="ul-type">
                                                    <li>병원, 의원 등 건강진단 관련 업무를 위탁받은 자, 계약적부 조사를 위탁받은 자(진단 및 계약적부 조사가 필요한 보험계약의 경우에 한함)</li>
                                                    <li>재보험사</li>
                                                    <li>업무수탁자(모집자) 등</li>
                                                </ul>

                                                <h2>개인(신용)정보를 제공받는 자의 이용목적</h2>
                                                <ul class="ul-type">
                                                    <li>건강진단 업무(지정의 또는 파라메딕업체), 고지사항 확인(적부조사회사), 의료자문(사의), 계약적부조사, 할증심사, 인수 가능여부 확인(재보험사)</li>
                                                    <li>본인 실명인증(신용정보회사)</li>
                                                    <li>보험계약상담, 보험계약 인수여부 결정을 위한 판단 등</li>
                                                </ul>

                                                <h2>제공할 개인(신용)정보의 내용</h2>
                                                <ul class="ul-type">
                                                    <li>개인식별정보(성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소)</li>
                                                    <li>계약전 알릴의무사항</li>
                                                    <li>현대해상, 신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 보험계약정보 및 보험금지급 관련 정보(사고정보 포함) (단, 제공받는 자의 이용 목적을 위해 필요한 정보에 한함)</li>
                                                </ul>

                                                <h2>제공받는 자의 개인(신용)정보 보유&middot;이용기간</h2>
                                                <div class="ul-type">수집&middot;동의일로부터 1년까지</div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- //content -->
                                </div>
                                <!-- // container -->

                            </div>
                            <!-- //wrap -->
      
                          </body>
                          </html>
                            `;
  return html;
};

export const wwTermsSb5 = () => {
  const html = `
                          <html>
                          <head>
                          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                          <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                          <style type="text/css">
                            ${commonCss}
                            ${defaultCss}
                          </style>
                          </head>
                          <body>
                          <!-- wrap -->
                            <div id="wrap" class="pop">

                                <!-- container -->
                                <div id="container">
                                    <!-- content -->
                                    <div id="content">
                                        <div class="cont-inner">                
                                            <div class="term">
                                                <h1 class="first">민감정보 및 고유식별정보의 처리에 관한 사항(필수)</h1>
                                                <div class="in-box">현대해상 및 현대해상 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 상기의 개인(신용)정보에 대한 개별 동의사항에 대하여 다음과 같이 귀하의 민감정보(질병&middot;상해정보) 및 고유식별정보(주민등록번호&middot;외국인등록번호&middot;운전면허번호)를 처리<span class="primary">(수집&middot;이용, 조회, 제공)</span>하고자 합니다. 이에 동의하십니까?</div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- //content -->
                                </div>
                                <!-- // container -->

                            </div>
                            <!-- //wrap -->
      
                          </body>
                          </html>
                            `;
  return html;
};

export const wwTermsSd1 = () => {
  const html = `
                            <html>
                            <head>
                            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                            <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                            <style type="text/css">
                              ${commonCss}
                              ${defaultCss}
                            </style>
                            </head>
                            <body>
                            <!-- wrap -->
                                <div id="wrap" class="pop">


                                    <!-- container --> 
                                    <div id="container">
                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">보험가입시 유의사항</h1>
                                                    <div>준법감시인 확인필 20202980(2020.04.01)</div>
                                                    <ol class="ol-type h-top2">
                                                        <li>보험금 지급제한 사항
                                                            <ul class="dep2">회사는 아래와 같은 손해는 보상하여 드리지 아니합니다.
                                                                <li class="h-top">계약자, 피보험자(보험대상자, 법인인 경우에는 그 이사 또는 법인의 업무를 집행하는 그 밖의 기관) 또는 이들의 법정대리인의 고의 또는 중대한 과실</li>
                                                                <li>풍수해가 발생했을 때 생긴 도난, 또는 분실로 생긴 손해</li>
                                                                <li>보험 목적의 노후 및 하자로 생긴 손해</li>
                                                                <li>풍수해로 생긴 화재, 폭발 손해(단, 지진으로 인해 발생한 화재손해는 보상)</li>
                                                                <li>한파, 서리, 얼음, 우박으로 인한 손해</li>
                                                                <li>축대, 제방 등의 붕괴로 인한 손해(단, 붕괴의 직접원인이 이 약관에 의하여 보상되는 사고일 때에는 보상)</li>
                                                                <li>침식활동 및 지하수로 인한 손해</li>
                                                                <li>보험계약일 현재 이미 진행 중인 태풍, 호우, 홍수, 강풍, 풍랑, 해일, 대설, 지진으로 인한 손해
                                                                    <div class="type-in">
                                                                        [이미 진행 중]<br>
                                                                        → 보험기간 중에 보험의 목적이 위치하고 있는 지역에 기상청(홍수통제소 포함) 기상특보(주의보, 경보) 또는 에비특보 발령시점을 기준으로 합니다.
                                                                    </div>                                    
                                                                </li>
                                                                <li>온실 시설의 단순 피복재(비닐 등) 파열(단, 단순비닐파손특약에 가입한 경우는 제외)</li>
                                                                <li>소파 미만의 손해(주택의 경우 침수는 보상)</li>
                                                                <li>전쟁, 내란, 폭동, 소요, 노동쟁의 등으로 인한 손해</li>
                                                            </ul>
                                                        </li>
                                                        <li>청약철회 청구제도
                                                            <ul class="dep2">
                                                                <li>보험계약자는 보험증권을 받은 날부터 15일 이내에 그 청약을 철회할 수 있으며, 이 경우 3일 이내에 보험료를 돌려드립니다.<br>
                                                                다만, 진단계약, 보험기간이 1년 미만인 계약 또는 전문보험계약자가 체결한 계약 및 청약을 한 날로부터 30일을 초과하는 경우에는 청약을 철회할 수 없습니다.<br>
                                                                청약철회 기간 내에 청약철회를 하실 경우 납입한 보험료 전액을 돌려받으실 수 있습니다.
                                                                </li>
                                                                <li>전문보험계약자
                                                                    <div class="dep3">
                                                                        보험계약에 관한 전문성, 자산규모 등에 비추어 보험계약의 내용을 이해하고 이행할 능력이 있는 자로서 보험업법 제2조(정의),
                                                                        보험업법시행령 제6조의 2(전문보험계약자의 범위 등) 도는 보험업감독규정 제1-4조의 2(전문보험계약자의 범위)에서 정한 국가, 한국은행, 
                                                                        대통령령으로 정하는 금융기관, 주권상장법인, 지방자치단체, 단체보험계약자 등의 전문보험계약자를 말합니다.
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>보험료 납입
                                                            <div class="type-in">보험료는 회사에 직접 납입, 자동이체, 신용카드를 통해 납입하실 수 있으며 보험료 납입 후에도 반드시 소정의 영수증을 받으셔야 합니다. 단, 인터넷계약의 경우는 신용카드를 통해 보험료를 납입하실 수 있으며 영수증 발급을 생략할 수 있습니다.</div>
                                                        </li>
                                                        <li>상담 및 보험분쟁조정안내
                                                            <ul class="dep2">
                                                                <li>보험에 대한 문의사항 및 불만사항이 있을 경우 현대해상(전화 <a href="tel:1588-5656">1588-5656</a> / 인터넷 <a href="https://www.hi.co.kr/index.jsp" target="_blank">hi.co.kr</a> &gt; 전자민원접수) 또는
                                                                    인슈로보(전화 <a href="tel:070-4126-3333">070-4126-3333</a> / 카카오톡채널 “인슈로보”)로 연락주시면 신속하게 처리해 드립니다.<br>
                                                                    또한 보험에 관한 분쟁이 있을 때에는 금융감독원 및 한국소비자원에 분쟁조정을 신청하실 수 있습니다.
                                                                </li>
                                                                <li>금융감독원
                                                                    <ul class="dep3">
                                                                        <li>전화 : <a href="tel:1332">1332</a></li>
                                                                        <li>홈페이지 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a></li>
                                                                        <li>e-금융센터 : <a href="https://www.fcsc.kr/" target="_blank">www.fcsc.kr</a>)</li>
                                                                    </ul>
                                                                </li>
                                                                <li>한국소비자원
                                                                    <ul class="dep3">
                                                                        <li>전화 : <a href="tel:1372">1372</a></li>
                                                                        <li>홈페이지 : <a href="https://www.kca.go.kr/home/main.do" target="_blank">www.kca.go.kr</a>)</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>                            
                                                        </li>
                                                        <li>보험모집질서위반
                                                            <ul class="dep2">
                                                                <li>보험계약 청약과 관련 특별이익을 제공하는 등 보험모집질서 위반행위는 보험업법에 의해 처벌 받을 수 있습니다.</li>
                                                                <li>금육감독원 위반행위 신고 센터
                                                                    <ul class="dep3">
                                                                        <li>전화 : 국번없이 <a href="tel:1332">1332</a></li>
                                                                        <li>휴대전화 : <a href="tel:02-1332">02-1332</a></li>
                                                                        <li>인터넷 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a> 내 “보험모집질서위반신고”</li>
                                                                    </ul>
                                                                </li>
                                                                <li>손해보험협회
                                                                    <ul class="dep3">
                                                                        <li>전화 : <a href="tel:02-3702-8585">02-3702-8585</a></li>
                                                                        <li>팩스 : 02-3702-8691</li>
                                                                        <li>인터넷 : <a href="https://www.knia.or.kr/main" target="_blank">www.knia.or.kr</a> 내 “모집질서문란 신고센터＂</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>계약자배당에 관한 사항
                                                            <div class="dep2">무배당 상품으로 배당을 하지 않습니다.</div>
                                                        </li>
                                                        <li>보험료 환급
                                                            <div class="dep2">순수 보장성 상품으로 만기 시 환급금이 없습니다. 
                                                                <div class="info-txt2 bk">
                                                                    기타 자세한 사항은 약관의 내용을 따릅니다.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>보험계약체결
                                                            <ul class="dep2">
                                                                <li>보험계약 체결 전에 상품설명서 및 약관을 읽어 보시기 바랍니다.</li>
                                                                <li>기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 안상 또는 보장내용이 달라질 수 있습니다.</li>
                                                            </ul>
                                                        </li>
                                                        <li>보험계약상의 알릴 의무
                                                            <ul class="dep2">
                                                                <li>계약 전 알릴 의무
                                                                    <div class="dep3">
                                                                    계약을 맺을 때에 계약자, 피보험자 또는 이들의 대리인은 계약 청약서(질문서를 포함. 이하 동일)의 기재사항에 관하여 아는 사실을 빠짐없이
                                                                    그대로 회사에 알려야 합니다. 인터넷 계약의 경우 입력사항을 정확하게 기재해 주셔야 합니다.
                                                                    </div>
                                                                </li>
                                                                <li>계약 후 알릴 의무
                                                                    <ul class="dep3">
                                                                        <li>이 계약에서 담보하는 위험과 동일한 위험에 대해서 다른 회사와 다른 계약을 맺을 때</li>
                                                                        <li>보험의 목적물을 양도할 때</li>
                                                                        <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 구조를 변경, 개축, 증축하거나 계속하여 15일 이상 수선하는 경우</li>
                                                                        <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 용도를 변경함으로써 위험이 변경하는 경우</li>
                                                                        <li>보험의 목적인 건물 또는 보험의 목적이 들어있는 건물을 계속하여 30일 이상 비워 두거나 휴업하는 경우</li>
                                                                        <li>위 이외의 위험이 뚜렷이 증가할 경우</li>
                                                                        <li>알릴 의무를 위반하신 경우 계약을 해지하거나 보험금 지급이 제한될 수 있습니다.
                                                                            <div class="info-txt2 bk">
                                                                                기타 자세한 사항은 약관의 내용을 따릅니다.
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>예금자 보호안내
                                                            <div class="dep2">
                                                                이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 귀하의 모든 예금보호 대상 금융상품의
                                                                해약환급금(또는 만기시 보험금이나 사고 보험금)에 기타지급금을 합하여 1인당 “최고 5천만원＂이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.
                                                                또한, 보험계약자 및 보험료 납부자가 법인이면 보호되지 않습니다.
                                                                <div class="info-txt2 bk">
                                                                    위 내용은 예금자보호법 및 관련 법령의 개정에 따라 달라질 수 있으며, 자세한 내용은 예금보험공사(<a href="http://www.kdic.or.kr/main.do" target="_blank">www.kdic.or.kr</a>)로 문의 바랍니다.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>3대 기본 지키기 및 계약자 의무사항
                                                            <ul class="dep2">
                                                                <li>자필서명 (인터넷 계약은 공동인증을 통해 대체될 수 있음)</li>
                                                                <li>청약서 부본전달 (인터넷 계약은 예외)</li>
                                                                <li>보험약관전달 (인터넷 계약은 이메일 등 전자적 수단에 의해 전달될 수 있음)
                                                                    <div class="info-txt2 bk">3대 기본 지키기 미이행시는 계약성립일로부터 3개월 이내에 계약을 취소할 수 있습니다.</div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        
                                                        
                                                    </ol>  
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
        
                            </body>
                            </html>
                              `;
  return html;
};

export const wwTermsSd2 = () => {
  const html = `
                            <html>
                            <head>
                            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                            <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                            <style type="text/css">
                              ${commonCss}
                              ${defaultCss}
                            </style>
                            </head>
                            <body>
                            <!-- wrap -->
                                <div id="wrap" class="pop">


                                    <!-- container --> 
                                    <div id="container">
                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">실손보상 풍수해보험 (소상공인용) 상품 설명</h1>
                                                    <div class="h-top">준법감시인 확인필 20202980(2020.04.01)</div>
                                                    <h2>기본정보</h2>
                                                    <div class="tbl">
                                                        <table>
                                                            <colgroup>
                                                                <col style="width:20%">
                                                                <col style="width:*%">
                                                                <col style="width:20%">
                                                                <col style="width:*%">
                                                            </colgroup>
                                                            <tbody>
                                                                <tr>
                                                                    <th>보험상품</th>
                                                                    <td colspan="3">실손보상 풍수해보험(소상공인용)</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>피보험자</th>
                                                                    <td>소유자/임차인 (점유자)</td>
                                                                    <th>보장형태</th>
                                                                    <td> 실손보상형</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>보험기간</th>
                                                                    <td>1년 (24:00시부터 24:00시까지)</td>
                                                                    <th>납입방법</th>
                                                                    <td>일시납</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>상품형태</th>
                                                                    <td>순수보장형(만기환급금 없음)</td>
                                                                    <th>보험목적물</th>
                                                                    <td>법률상 소상공인의 상가 및 공장</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>보험사</th>
                                                                    <td colspan="3">현대해상</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <h2>상품안내</h2>
                                                    <div class="ul-type">본 보험상품은 아래 보험목적물에 대하여 풍수해 (태풍, 호우, 홍수, 강풍, 풍랑, 대설, 해일, 지진)로 입은 손해에 대해 보상하기 위한 상품입니다.
                                                        <div class="info-txt">보험목적물 : 법률상 소상공인의 상가 및 공장</div>
                                                    </div>
                                                    <h2>보장내용</h2>
                                                    <ul class="ul-type">
                                                        <li>
                                                            풍수해
                                                            <div class="tbl">
                                                                <table>
                                                                    <colgroup>
                                                                        <col style="width:20%">
                                                                        <col style="width:20%">
                                                                        <col style="width:*%">
                                                                    </colgroup>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th colspan="2">구분</th>
                                                                            <td colspan="3">기준</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colspan="2">태풍</th>
                                                                            <td colspan="3">태풍 영향 강풍, 풍랑, 호우 또는 해일현상 등이 기상청 기상주의보 발효기준에 도달될 때</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colspan="2">호우</th>
                                                                            <td colspan="3">3시간 강우량이 60mm이상 예상되거나 12시간 강우량이 110mm이상 예상될 때</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colspan="2">홍수</th>
                                                                            <td colspan="3">
                                                                                홍수예보지점의 수위가 계속 상승하여 주의보수위를 초과할 것이 예상되는 경우 <br>
                                                                                * 수위가 더 이상 상승하면 제방·수문·교량 등에 대한 경계가 필요한 수위로서 다음 각 목의 어느 하나에 해당하는 수위  <br>
                                                                                가. 홍수예보지점에 계획홍수량의 100분의 50에 해당하는 유량이 흐를 때의 수위 <br>
                                                                                나. 홍수예보지점의 5년 평균 저수위로부터 계획 홍수위까지 100분의 60에 해당하는 수위 <br>
                                                                                다. 가목과 나목에 따른 기준을 적용하기 곤란한 경우에는 홍수예보지점의 주변상황 및 제방정비상태를 고려한 수위 <br>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colspan="2">강풍</th>
                                                                            <td colspan="3">
                                                                                육상에서 풍속 14m/s 이상 또는 순간풍속 20m/s 이상이 될 때. 다만, 산지는 풍속이 17m/s 이상 또는 순간풍속 25m/s 이상이 예상될 때 해상에서 풍속 14m/s 이상이 3시간 이상 지속되거나 유의파고가 3m이상이 예상될 때
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colspan="2">풍랑</th>
                                                                            <td colspan="3">해상에서 풍수 14ms/s이상이 3시간 이상 지속되거나 유의파고가 3m이상이 예상 될 때</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th rowspan="2">해일</th>
                                                                            <th>폭풍해일</th>
                                                                            <td colspan="3">
                                                                                천문조, 폭풍, 저기압 등의 복합적인 영향으로 해수면이 상승하여 발효기준값 이상이 예상될 때. 다만, 발효기준값은 지역별로 별도 지정
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th class="bl">지진해일</th>
                                                                            <td colspan="3">
                                                                                한반도 주변해역 (21 °N~45°N, 110°E∼145°E)등에서 규모 6.0이상의 해저지진이 발생하여 우리나라 해안가에 해일파고 0.5m 이상의 지진해일 내습이 예상될 때
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colspan="2">대설</th>
                                                                            <td colspan="3">24시간 신적설량이 5cm 이상 예상될 때</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th colspan="2">지진</th>
                                                                            <td colspan="3">
                                                                                국내 내륙에서 규모 3.5이상 또는 국내 해역에서 규모 4.00이상으로 추정되는 자연지진이 발생하거나, 국외에서 발생한 자연지진으로 인하여 피해가 예상되는 경우
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <ul class="dep2">
                                                                <li>일반물건
                                                                    <div class="info-txt">보험가입금액 한도내 실손보상 (단, 건물/시설은 합계 1억한도, 재고자산은 3천만원 한도)</div>
                                                                </li>
                                                                <li>공장물건
                                                                    <div class="info-txt">보험가입금액 한도내 실손보상(단, 건물/기계는 합계 1.5억한도, 재고자산은 3천만원 한도)</div>
                                                                </li>
                                                                <li>지급기준
                                                                    <div class="info-txt">
                                                                        태풍, 호우, 홍수, 강풍, 풍랑, 해일, 지진, 대설로 보험목적물에 손해가 발생한 경우 손해를 보상<br>
                                                                        (자기부담금액 제외)
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>잔존물제거비용
                                                            <ul class="dep3">
                                                                <li>풍수해로 인한 보험금과 잔존물 제거비용의 합계액은 보험증권에 기재된 보험가입금액 한도. 단, 잔존물 제거 비용은 손해액의 10%를 초과할 수 없음</li>
                                                                <li>풍수해로 잔존물제거비용이 발생한 경우 보상.
                                                                    <div class="info-txt">잔존물제거비용 : 잔존물의 해체비용, 청소비용, 상차비용</div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>손해방지비용
                                                            <ul class="dep3">
                                                                <li>보험가입금액과 별개로 추가지급</li>
                                                                <li>손해의 방지 또는 경감을 위해 지출한 필요 또는 유익한 비용</li>
                                                            </ul>
                                                        </li>
                                                        <li>대위권보존비용
                                                            <ul class="dep3">
                                                                <li>보험가입금액과 별개로 추가지급</li>
                                                                <li>제3자로부터 손해배상을 받을 권리가 있는 경우 권리를 지키거나 행사하기 위해 지출한 필요 또는 유익한 비용</li>
                                                            </ul>
                                                        </li>

                                                        <li>잔존물보전비용
                                                            <ul class="dep3">
                                                                <li>보험가입금액과 별개로 추가지급</li>
                                                                <li>회사에 잔존물을 넘기는 경우 잔존물을 보전하기 위하여 지출한 필요 또는 유익한 비용</li>
                                                            </ul>
                                                        </li>

                                                        <li>기타협력비용
                                                            <ul class="dep3">
                                                                <li>보험가입금액과 별개로 추가지급</li>
                                                                <li>회사의 요구를 따르기 위하여 지출한 필요 또는 유익한 비용</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
        
                            </body>
                            </html>
                              `;
  return html;
};

export const wwTermsSe1 = () => {
  const html = `
                            <html>
                            <head>
                            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                            <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                            <style type="text/css">
                              ${commonCss}
                              ${defaultCss}
                            </style>
                            </head>
                            <body>
                            <!-- wrap -->
                            <div id="wrap" class="pop">

                                <!-- container -->
                                <div id="container">
                                    <!-- content -->
                                    <div id="content">
                                        <div class="cont-inner">                
                                            <div class="term">
                                                <h1 class="first">소비자 권익에 관한 사항</h1>
                                                <div class="in-box">본 동의를 거부하시는 경우에는 보험계약 상담 등 정상적인 서비스제공이 불가능하며 본 동의서에 의한 개인(신용) 정보 조회는 귀하의 신용등급에 영향을 주지 않습니다. 또한, 동의하시더라도 인슈로보 고객센터(070-4126-3333) 또는 현대해상 홈페이지 및 고객콜센터(1577-1001)를 통해 철회하거나 보험계약상담 목적의 연락에 대한 중단을 요청하실 수 있습니다.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- //content -->
                                </div>
                                <!-- // container -->

                            </div>
                            <!-- //wrap -->
        
                            </body>
                            </html>
                              `;
  return html;
};
export const wwTermsSe2 = () => {
  const html = `
                              <html>
                              <head>
                              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                              <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                              <style type="text/css">
                                ${commonCss}
                                ${defaultCss}
                              </style>
                              </head>
                              <body>
                              <!-- wrap -->
                                <div id="wrap" class="pop">

                                    <!-- container -->
                                    <div id="container">
                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">개인(신용)정보의 수집/이용에 관한 사항</h1>
                                                    <div class="in-box">현대해상 및 현대해상 업무수탁자는 「개인정보 보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 본 계약과 관련하여 귀하의 개인(신용)정보를 다음과 같이 수집&middot;이용하고자 합니다. 이에 대하여 동의하십니까?</div>
                                                    <h2>개인(신용)정보의 수집&middot;이용 목적</h2>
                                                    <ul class="ul-type">
                                                        <li>보험계약상담, 보험계약 인수여부 결정을 위한 판단, 다중이용업소화재배상책임보험 가입대상 확인, 재무설계서비스, 실손의료보험계약&middot;기타손해보험계약 등 ‘실제 발생하는 손해만을 보상하는 실손형 보험’의 중복가입 확인을 위한 보험가입내역 조회</li>
                                                        <li>민원 및 분쟁관련 대응, 만기알람서비스 신청 고객의 보험만기 안내</li>
                                                    </ul>
                                                    <h2>수집&middot;이용할 개인(신용) 정보의 내용</h2>
                                                    <ul class="ul-type">
                                                        <li>개인식별정보 (성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 직업, 전화번호, 전자우편주소)</li>
                                                        <li>질병 및 상해에 관한 정보(자동차보험은 해당없음)</li>
                                                        <li>현대해상, 신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 보험계약정보 및 보험금지급 관련 정보(사고정보 포함)</li>
                                                        <li>다중이용업소정보(상호, 업종, 영업장 면적, 주소, 소방방재청 발급 일련번호)</li>
                                                        <li>소득에 관한 정보(보험료 또는 담보별 누적 가입금액이 과도한 경우)</li>
                                                    </ul>
                                                    <h2>개인(신용)정보 보유&middot;이용기간</h2>
                                                    <div class="ul-type">수집&middot;동의일로부터 1년까지</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
          
                              </body>
                              </html>
                                `;
  return html;
};
export const wwTermsSe3 = () => {
  const html = `
                              <html>
                              <head>
                              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                              <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                              <style type="text/css">
                                ${commonCss}
                                ${defaultCss}
                              </style>
                              </head>
                              <body>
                              <!-- wrap -->
                                <div id="wrap" class="pop">

                                    <!-- container -->
                                    <div id="container">
                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">개인(신용) 정보의 조회에 관한 사항(필수)</h1>
                                                    <div class="in-box">현대해상 및 현대해상 업무수탁자는 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에 따라 귀하의 개인(신용)정보를 다음과 같이 신용정보집중기관, 보험요율산출기관, 공공기관 등으로부터 조회하고자 합니다. 이에 대하여 동의하십니까?</div>
                                                    <h2>개인(신용)정보의 조회목적</h2>
                                                    <div class="ul-type">보험계약상담, 보험계약 인수여부 결정을 위한 판단, 다중이용업소화재배상책임보험, 실손의료보험계약&middot;기타손해보험계약 등 ‘실제 발생하는 손해만을 보상하는 실손형 보험'의 중복가입 확인</div>
                                                    <h2>조회할 개인(신용)정보의 내용</h2>
                                                    <ul class="ul-type">
                                                        <li>신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 정보(피보험자의 질병 및 상해에 관한 정보(자동차보험은 해당없음), 보험계약정보, 보험금지급정보)</li>
                                                        <li>개인식별정보 (성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 직업, 전화번호, 전자우편주소)</li>
                                                        <li>다중이용업소정보</li>
                                                        <li>신용정보회사 및 통신사 등의 실명인증 및 본인인증을 위한 정보</li>
                                                    </ul>
                                                    <h2>조회동의 유효 기간 및 조회자(개인(신용)정보를 제공 받은 자)의 보유&middot;이용 기간</h2>
                                                    <div class="ul-type">동의일로부터 보험계약의 청약시까지(최대 1년)</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
                              </body>
                              </html>
                                `;
  return html;
};
export const wwTermsSe4 = () => {
  const html = `
                              <html>
                              <head>
                              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                              <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                              <style type="text/css">
                                ${commonCss}
                                ${defaultCss}
                              </style>
                              </head>
                              <body>
                              <!-- wrap -->
                                <div id="wrap" class="pop">

                                    <!-- container -->
                                    <div id="container">
                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">개인(신용)정보의 제공에 관한 사항(필수)</h1>
                                                    <div class="in-box">당사 및 현대해상은 「개인정보 보호법」 및 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에 따라 귀하의 개인(신용)정보를 다음과 같이 제3자에게 제공하고자 합니다. 이에 대하여 동의하십니까?</div>
                                                    <h2>개인(신용)정보를 제공받는자</h2>
                                                    <ul class="ul-type">
                                                        <li>병원, 의원 등 건강진단 관련 업무를 위탁받은 자, 계약적부 조사를 위탁받은 자(진단 및 계약적부 조사가 필요한 보험계약의 경우에 한함)</li>
                                                        <li>재보험사</li>
                                                        <li>업무수탁자(모집자) 등</li>
                                                    </ul>

                                                    <h2>개인(신용)정보를 제공받는 자의 이용목적</h2>
                                                    <ul class="ul-type">
                                                        <li>건강진단 업무(지정의 또는 파라메딕업체), 고지사항 확인(적부조사회사), 의료자문(사의), 계약적부조사, 할증심사, 인수 가능여부 확인(재보험사)</li>
                                                        <li>본인 실명인증(신용정보회사)</li>
                                                        <li>보험계약상담, 보험계약 인수여부 결정을 위한 판단 등</li>
                                                    </ul>

                                                    <h2>제공할 개인(신용)정보의 내용</h2>
                                                    <ul class="ul-type">
                                                        <li>개인식별정보(성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소)</li>
                                                        <li>계약전 알릴의무사항</li>
                                                        <li>현대해상, 신용정보집중기관 및 보험요율산출기관에서 수집&middot;관리하는 보험계약정보 및 보험금지급 관련 정보(사고정보 포함) (단, 제공받는 자의 이용 목적을 위해 필요한 정보에 한함)</li>
                                                    </ul>

                                                    <h2>제공받는 자의 개인(신용)정보 보유&middot;이용기간</h2>
                                                    <div class="ul-type">수집&middot;동의일로부터 1년까지</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
          
                              </body>
                              </html>
                                `;
  return html;
};
export const wwTermsSe5 = () => {
  const html = `
                              <html>
                              <head>
                              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                              <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                              <style type="text/css">
                                ${commonCss}
                                ${defaultCss}
                              </style>
                              </head>
                              <body>
                              <!-- wrap -->
                                <div id="wrap" class="pop">

                                    <!-- container -->
                                    <div id="container">
                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">민감정보 및 고유식별정보의 처리에 관한 사항(필수)</h1>
                                                    <div class="in-box">현대해상 및 현대해상 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 상기의 개인(신용)정보에 대한 개별 동의사항에 대하여 다음과 같이 귀하의 민감정보(질병&middot;상해정보) 및 고유식별정보(주민등록번호&middot;외국인등록번호&middot;운전면허번호)를 처리<span class="primary">(수집&middot;이용, 조회, 제공)</span>하고자 합니다. 이에 동의하십니까?</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
          
                              </body>
                              </html>
                                `;
  return html;
};

export const wwTermsSf1 = () => {
  const html = `
                                <html>
                                <head>
                                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                                <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                                <style type="text/css">
                                  ${commonCss}
                                  ${defaultCss}
                                </style>
                                </head>
                                <body>
                                <!-- wrap -->
                                <div id="wrap" class="pop">

                                    <!-- container -->
                                    <div id="container">

                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">전자금융거래 이용약관</h1>
                                                    <h2>제1조 (목적)</h2>
                                                    <div class="in-txt">
                                                        이 약관은 ㈜인슈로보와 현대해상화재보험회사(이하 "회사"라 한다)와 이용자 사이의 전자금융거래에 관한 기본적인 사항을 정함으로써 거래를 신속하고 효율적으로 처리하며 거래당사자 상호간의 이해관계를 합리적으로 조정하는 것을 목적으로 한다.
                                                    </div>
                                                    <h2>제2조 (용어의 정의)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이 약관에서 사용하는 용어의 정의는 다음 각 호와 같다.
                                                            <ul class="dep2">
                                                                <li>"전자금융거래"라 함은 회사가 전자적 장치를 통하여 금융상품 및 서비스를 제공하고 이용자가 회사와 직접 대면하거나 의사소통을 하지 아니하고 자동화된 방식으로 이를 이용하는 거래를 말한다.</li>
                                                                <li>"이용자"라 함은 전자금융거래를 위하여 회사와 체결한 계약(이하 "전자금융거래계약" 이라 한다)에 따라 전자금융거래를 이용하는 자를 말한다.</li>
                                                                <li>"전자적 장치"라 함은 전자금융거래정보를 전자적 방법으로 전송하거나 처리하는데 이용되는 장치로서 현금자동지급기, 자동입출금기, 지급용단말기, 컴퓨터, 전화기 그 밖에 전자적 방법으로 정보를 전송하거나 처리하는 장치를 말한다.</li>
                                                                <li>"접근매체"라 함은 전자금융거래에 있어서 이용자가 거래지시를 하거나 또는 이용자 및 거래내용의 진실성과 정확성을 확보하기 위하여 사용되는 다음 각목의 어느 하나에 해당하는 수단 또는 정보를 말한다.
                                                                    <ul class="dep3">
                                                                        <li>전자식 카드 및 이에 준하는 전자적 정보</li>
                                                                        <li>전자서명법에 따른 공인인증서</li>
                                                                        <li>회사에 등록된 이용자 번호</li>
                                                                        <li>등록되어 있는 이용자의 생체정보</li>
                                                                        <li>가목 또는 나목의 수단이나 정보를 사용하는데 필요한 비밀번호</li>
                                                                    </ul>
                                                                </li>
                                                                <li>"전자문서"라 함은 전자거래기본법 제2조제1호의 규정에 따라 작성, 송신 &middot; 수신 또는 저장된 정보를 말한다.</li>
                                                                <li>"거래지시"라 함은 이용자가 전자금융거래계약에 따라 회사에게 전자금융거래의 처리를 지시하는 것을 말한다.</li>
                                                                <li>"오류"라 함은 이용자의 고의 또는 과실 없이 전자금융거래가 약관(개별약관을 포함한다), 전자금융거래계약 또는 이용자의 거래지시에 따라 이행되지 아니한 경우를 말한다.</li>
                                                                <li>"전자지급거래"라 함은 자금을 주는 자(이하 "지급인"이라 한다)가 회사로 하여금 전자지급수단을 이용하여 자금을 받는 자(이하 "수취인"이라 한다)에게 자금을 이동하게 하는 전자금융거래를 말한다.</li>
                                                                <li>"전자지급수단"이라 함은 전자자금이체, 직불전자지급수단, 선불전자지급수단, 전자화폐, 신용카드, 전자채권 그 밖의 전자적 방법에 따른 지급수단을 말한다.</li>
                                                                <li>"전자자금이체"라 함은 지급인과 수취인 사이에 자금을 지급할 목적으로 회사에 개설된 계좌에서 다른 계좌로 전자적 장치에 의하여 다음 각 목의 어느 하나에 해당하는 방법으로 자금을 이체하는 것을 말한다.
                                                                    <ul class="dep3">
                                                                        <li>회사에 대한 지급인의 지급지시</li>
                                                                        <li>회사에 대한 수취인의 추심지시(이하 "추심이체"라 한다)</li>
                                                                    </ul>
                                                                </li>
                                                                <li>"정보시스템"이라 함은 전자금융업무를 포함하여 정보기술부문에 사용되는 하드웨어(hardware)와 소프트웨어(software)를 말하며 관련장비를 포함한다.</li>
                                                                <li>"영업일"이라 함은 회사가 영업점에서 정상적인 영업을 하는 날을 말한다.</li>
                                                                <li>"개별약관"이라 함은 이 약관과 함께 전자금융거래에 적용되는 약관으로서 회사가 별도로 작성한 약관을 말한다.</li>
                                                            </ul>
                                                        </li>
                                                        <li>이 약관에서 별도로 정하지 아니한 용어의 정의는 전자금융거래법 및 전자금융 거래법 시행령, 전자금융감독규정 및 전자금융감독규정 시행세칙에서 정하는 바에 따른다.</li>
                                                    </ol>
                                                    <h2>제3조 (적용범위)</h2>
                                                    <div class="in-txt">이 약관은 다른 법률에 특별한 규정이 있는 경우를 제외하고 모든 전자금융거래에 적용한다.</div>
                                                    <h2>제4조 (전자금융거래계약의 체결 및 해지)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>전자금융거래를 이용하고자 하는 이용자는 개별약관에서 정하는 방법에 따라 회사와 전자금융거래계약을 체결하여야 한다. 다만, 다음 각 호의 1에 해당하는 경우에는 그러하지 아니할 수 있다.
                                                            <ul class="dep2">
                                                                <li>단순조회(보험계약사항, 간접투자상품계좌 조회 등)</li>
                                                                <li>기타 회사가 정하는 거래</li>
                                                            </ul>
                                                        </li>
                                                        <li>회사는 제1항의 규정에 의한 전자금융거래계약을 체결함에 있어 이용자에게 약관을 명시하여야 하며, 이용자의 요청이 있는 경우 다음 각 호의 어느 하나에 해당하는 방법으로 이용자에게 약관을 교부하여야 한다.
                                                            <ul class="dep2">
                                                                <li>직접교부</li>
                                                                <li>전자문서의 전송(전자우편을 이용한 전송을 포함한다)</li>
                                                                <li>모사전송</li>
                                                                <li>우편</li>
                                                            </ul>
                                                        </li>
                                                        <li>회사는 제1항의 규정에 의한 전자금융거래계약을 체결함에 있어 이용자가 약관의 내용에 대한 설명을 요청하는 경우 다음 각 호의 어느 하나에 해당하는 방법으로 이용자에게 약관의 중요내용을 설명하여야 한다.
                                                            <ul class="dep2">
                                                                <li>약관의 중요내용을 이용자에게 직접 설명</li>
                                                                <li>약관의 중요내용에 대한 설명을 전자적 장치를 통하여 이용자가 알기 쉽게 표시하고 이용자로부터 해당 내용을 충분히 인지하였다는 의사표시를 전자적 장치를 통하여 수령</li>
                                                            </ul>
                                                        </li>
                                                        <li>전자금융거래에 관한 계약을 해지하고자 할 때에는 이용자 본인이 전자금융거래에 관한 개별약관에 정한 바에 따라 서면 또는 해당 전자적 장치에 의하여 회사에 해지신청을 하여야 한다.</li>
                                                    </ol>
                                                    <h2>제5조 (전자금융거래의 성립)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사가 이용자의 전자금융거래요청을 접수하고 그 내용이 회사가 정하는 정보시스템에 의해 처리되어 저장되는 때에 성립한다.</li>
                                                        <li>회사는 제1항의 전자금융거래요청에 대한 접수사실과 그 처리결과를 이용자에게 즉시 알려야 한다.</li>
                                                    </ol>
                                                    <h2>제6조 (전자지급거래의 효력발생시기 등)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>전자지급수단을 이용하여 자금을 지급하는 경우 그 지급의 효력은 다음 각 호에서 정한 때에 발생한다.
                                                            <ul class="dep2">
                                                                <li>전자자금이체의 경우 : 거래지시된 금액의 정보에 대하여 수취인의 계좌가 개설되어 있는 금융기관 계좌의 원장에 입금기록이 끝난 때</li>
                                                                <li>전자적 장치로부터 직접 현금을 출금하는 경우 : 수취인이 현금을 수령한 때</li>
                                                                <li>선불전자지급수단 및 전자화폐로 지급하는 경우 : 거래지시된 금액의 정보가 수취인이 지정한 전자적 장치에 도달한 때</li>
                                                                <li>그 밖의 전자지급수단으로 지급하는 경우 : 거래지시된 금액의 정보가 수취인의 계좌가 개설되어 있는 금융기관의 전자적 장치에 입력이 끝난때</li>
                                                            </ul>
                                                        </li>
                                                        <li>이용자는 제1항 각 호의 규정에 따라 지급의 효력이 발생하기 전까지 거래지시를 철회할 수 있다.</li>
                                                        <li>제2항의 규정에도 불구하고 회사는 대량으로 처리하는 거래 또는 예약에 따른 거래 등의 경우에는 개별약관에서 정한 바에 따라 거래지시의 철회시기를 달리 정할 수 있다.</li>
                                                        <li>제2항 및 제3항의 규정에 의한 거래지시의 철회방법과 절차는 개별약관에서 정하는 바에 따른다.</li>
                                                    </ol>
                                                    <h2>제7조 (접근매체의 발급 및 등록)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사가 접근매체를 발급할 때에는 이용자의 신청이 있는 경우에 한하여 본인임을 확인한 후에 발급하여야 한다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 이용자의 신청이나 본인의 확인이 없는 때에도 발급할 수 있다.
                                                            <ul class="dep2">
                                                                <li>갱신 또는 대체발급 예정일전 6월 이내에 사용된 적이 없는 접근매체의 경우에는 그 이용자로부터 갱신 또는 대체발급에 대하여 서면(「전자서명법」 제2조제3호의 규정에 따른 공인전자서명(이하 '공인전자서명'이라 한다)이 있는 전자문서를 포함한다)으로 동의를 얻은 경우</li>
                                                                <li>갱신 또는 대체발급 예정일전 6월 이내에 사용된 적이 있는 접근매체의 경우에는 그 예정일부터 1월 이전에 이용자에게 발급 예정사실을 알린 후 20일 이내에 이용자로부터 이의제기가 없는 경우</li>
                                                            </ul>
                                                        </li>
                                                        <li>이용자는 전자금융거래계약을 체결하고 거래비밀번호 등을 전자적 장치를 통하여 직접 등록할 경우에는 회사가 정한 기한 내에 등록하여야 한다.</li>
                                                    </ol>
                                                    <h2>제8조 (접근매체의 관리)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이용자는 전자금융거래에 필요한 접근매체를 제3자에게 대여, 위탁 또는 양도하지 못한다.</li>
                                                        <li>이용자는 접근매체를 본인 이외의 제3자에게 누설해서는 안되며, 접근매체의 도용이나 위조 또는 변조를 방지하기 위하여 충분한 주의를 기울여야 한다.</li>
                                                    </ol>
                                                    <h2>제9조 (공인인증서 사용)</h2>
                                                    <div class="in-txt">이용자는 이 약관의 적용대상인 전자금융거래를 이용하는 경우 반드시 전자서명법에 의한 공인인증서를 사용하여야 한다. 다만, 회사가 지정한 거래 중 다음 각 호의 경우에는 그러하지 아니할 수 있다.
                                                        <ul class="ul-type h-top">
                                                            <li>본인 계약사항 및 거래내역에 대한 조회업무</li>
                                                            <li>ARS(자동응답서비스) 등과 같이 공인인증서의 설치운용이 불가능한 전자적 장치를 이용한 전자금융거래의 경우</li>
                                                            <li>회사가 범위를 정하여 공인인증서 적용을 제외한 경우</li>
                                                        </ul>
                                                    </div>
                                                    <h2>제10조 (이용시간)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이용자는 회사가 정한 시간 이내에서 전자금융거래를 이용할 수 있다.</li>
                                                        <li>이용시간은 회사의 사정에 따라 달라질 수 있으며, 이용시간을 변경하고자 할 경우에는 3 영업일전 본점 &middot; 영업점 또는 게시 가능하거나 기타 이용자가 접근하기 용이한 전자적 장치를 통하여 게시한다. 다만, 시스템 장애복구, 긴급한 프로그램 보수, 외부요인 등 불가피한 경우에는 예외로 한다.</li>
                                                    </ol>
                                                    <h2>제11조 (수수료)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사는 전자금융거래와 관련된 각종 수수료를 이용자로부터 징수할 수 있다.</li>
                                                        <li>회사는 제1항의 규정에 의한 수수료의 징수기준을 영업점 또는 전자적 장치에 비치 또는 게시하며, 이를 변경하고자 하는 경우 영업점 또는 전자적 장치에 변경 예정일 14일전부터 1개월 이상 비치 또는 게시한다.</li>
                                                    </ol>
                                                    <h2>제12조 (이체 한도)</h2>
                                                    <div class="in-txt">이용자는 회사가 정한 방법과 기준에 따라 계좌이체 및 계좌송금에 대한 이체 최고한도를 설정할 수 있다.</div>
                                                    <h2>제13조 (거래지시의 처리기준)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사는 이용자의 거래지시에 포함된 증권번호, 비밀번호, 이용자번호 등의 접근매체 정보를 신고된 것과 대조하여 그 일치 여부를 확인한 후에 거래지시를 처리한다.</li>
                                                        <li>이용자의 거래지시와 관련하여 회사가 수신한 전자문서는 각 문서마다 독립된 것으로 본다.</li>
                                                        <li>제2항의 규정에도 불구하고 거래지시 전자문서가 회사가 정한 시간 내에 동일한 내용으로 반복 수신된 경우 회사는 전화 기타 이용자에게 즉시 통지할 수 있는 전자적 장치 등을 통하여 이용자의 진정한 거래지시 의사를 확인하는 절차를 거친 후 나머지 전자문서를 임의로 폐기할 수 있다.</li>
                                                    </ol>
                                                    <h2>제14조 (전자금융거래의 제한)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사는 다음 각 호의 어느 하나에 해당하는 경우에는 해당 전자금융거래 전부를 제한할 수 있다.
                                                            <ul class="dep2">
                                                                <li>공인인증서 유효기간이 만료되었거나 공인인증서가 취소되었을 경우</li>
                                                                <li>일회용비밀번호(보안카드를 포함한다)를 분실신고 하였을 경우</li>
                                                                <li>이용자가 지정한 은행계좌가 거래 정지되거나 이용자가 회사에 알리지 않고 은행계좌를 임의 변경하는 등의 사유로 보험료 수납이나 대출금보험금 등의 지급이 불가능한 경우</li>
                                                            </ul>
                                                        </li>
                                                        <li>회사는 제1항에 의해 전자금융거래를 제한한 경우에는 이용자의 거래지시가 있을 때 해당 전자적 장치를 통하여 그 사유를 알려야 한다.</li>
                                                        <li>이용자는 제2항의 경우에 제7조에 의한 공인인증서 및 보안카드 재발급, 유효기간 연장 등의 절차를 거쳐 전자금융거래를 이용할 수 있다.</li>
                                                    </ol>
                                                    <h2>제15조 (거래내용의 확인)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사는 전자금융거래의 처리결과를 이용자가 전자적 장치를 통하여 즉시 확인할 수 있도록 하여야 한다.</li>
                                                        <li>회사는 이용자가 거래내용을 서면(전자문서를 제외한다. 이하 같다)으로 제공할 것을 요청하는 경우에는, 그 요청을 받은 날부터 2주 이내에 거래내용에 관한 서면을 교부하여야 한다.</li>
                                                        <li>제1항의 규정에도 불구하고 이용자가 요청하는 거래내용을 해당 전자적 장치로도 즉시 확인을 해주는 것이 사실상 곤란할 경우 회사는 해당 거래내용을 서면(전자문서를 제외한다) 형태로 출력하여 이용자에게 교부하여야 한다.</li>
                                                        <li>이용자는 거래지시와 제1항에 의한 처리결과가 일치하는지 여부를 확인하여야 한다.</li>
                                                    </ol>
                                                    <h2>제16조 (오류의 정정)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이용자는 전자금융거래에 오류가 있음을 안 때에는 즉시 회사에 정정을 요구할 수 있다.</li>
                                                        <li>회사는 제1항의 규정에 따른 오류의 정정 요구를 받은 때에는 이를 즉시 조사하여 처리한 후 정정요구를 받은 날부터 2주 이내에 그 처리결과를 이용자에게 알려야 한다.</li>
                                                        <li>회사는 스스로 전자금융거래에 오류가 있음을 안 때에는 이를 즉시 조사하여 처리한 후 오류가 있음을 안 날부터 2주 이내에 이용자에게 그 결과를 알려야 한다.</li>
                                                    </ol>
                                                    <h2>제17조 (사고 및 장애시의 처리)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이용자는 다음의 어느 하나에 해당 하는 사고 알았을 때에는 지체없이 이를 회사에 알려야 한다.
                                                            <ul class="dep2">
                                                                <li>접근매체의 위조나 변조로 발생한 사고</li>
                                                                <li>계약체결 또는 거래지시의 전자적 전송이나 처리 과정에 발생한 사고</li>
                                                                <li>전자금융거래를 위한 전자적 장치 또는 정보통신망에 침입하여 거짓이나 그 밖의 부정한 방법으로 획득한 접근매체의 이용으로 발생한 사고</li>
                                                            </ul>
                                                        </li>
                                                        <li>제1항의 통지는 회사가 이를 접수한 즉시 그 효력이 발생한다.</li>
                                                        <li>이용자가 제1항의 통지를 철회할 경우에는 이용자 본인이 회사에 서면으로 신청하여야 한다.</li>
                                                        <li>회사는 천재지변, 정전, 화재, 건물훼손, 전산장애 등의 사유로 이용자의 거래지시를 처리할 수 없거나 처리가 지연될 경우 동 사실과 사유 등을 이용자에게 지체없이 통보하며, 정상적인 전자금융거래가 이루어질 수 있도록 신속하게 조치한다.</li>
                                                        <li>회사는 이용자의 요청이 있을 때에는 사고 또는 장애의 사유를 지체 없이 조사하여 그 결과를 이용자에게 알려야 한다.</li>
                                                    </ol>
                                                    <h2>제18조 (계약내용 변경)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이용자는 전자적 장치를 이용하여 회사가 정한 방법과 기준에 따라 개별금융상품의 계약내용(이하 "금융계약내용" 이라 한다) 변경을 신청할 수 있다.</li>
                                                        <li>회사는 제1항에 의한 금융계약내용 변경신청을 접수한 경우에는 이용자가 변경내용을 다시 확인할 수 있도록 하여야 한다.</li>
                                                        <li>회사는 금융계약내용이 변경된 경우 이용자에게 그 사실을 전자적 장치를 통해 즉시 알려야 한다.</li>
                                                    </ol>
                                                    <h2>제19조 (신고사항의 변경)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이용자는 주소 &middot; 전화번호 &middot; 비밀번호 &middot; 전자우편 주소 &middot; 은행계좌 등 회사에 신고한 사항을 변경하고자 할 경우에는 전자적 장치나 회사가 정하는 기타의 방법에 의하여 변경신청을 하여야 한다.</li>
                                                        <li>제1항에 의한 신고사항의 변경은 회사가 신청을 접수한 즉시 효력이 발생한다.</li>
                                                    </ol>
                                                    <h2>제20조 (통지의 방법)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사는 제16조, 제17조 제4항 및 제5항에 의한 통지를 하는 경우에는 이용자가 신고한 연락처로 전화, 서면 또는 기타 전자적 장치로 알려야 한다.</li>
                                                        <li>회사가 서면으로 통지하였을 경우에는 천재지변 등 불가항력적인 경우 이외에는 보통의 우송기간이 지났을 때 도달한 것으로 추정한다.</li>
                                                        <li>이용자가 제19조에 의한 통지를 하지 아니하여 회사가 발송한 서면통지가 이용자에게 연착하거나 도달하지 아니한 때에는 보통의 우송기간이 경과한 때에 도달한 것으로 본다.</li>
                                                    </ol>
                                                    <h2>제21조 (통화내용의 녹음)</h2>
                                                    <div class="in-txt">회사는 거래의 정확성을 기하기 위하여 전화통화 내용을 녹음할 수 있다. 다만 녹음된 내용은 해당 거래의 분쟁이 발생할 경우의 증거자료로만 사용할 수 있으며, 이 경우 이용자는 회사에 녹음된 내용의 확인을 요구할 수 있다.</div>
                                                    <h2>제22조 (거래기록의 보존 및 자료 제공 등)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사는 전자금융거래의 내용을 추적 검색하거나 그 내용에 오류가 발생할 경우에 이를 확인하거나 정정할 수 있는 기록을 생성하여 전자금융거래의 성립 시점으로부터 5년의 범위 안에서 보존하여야 한다.</li>
                                                        <li>제1항의 규정에 따라 회사가 보존하여야 하는 기록의 종류, 보존방법 및 보존기간은 전자금융거래법시행령 제12조를 준용한다.</li>
                                                        <li>회사는 이용자의 요청이 있을 경우 「금융실명거래 및 비밀보장에 관한 법률」 등 관계 법률에 저촉되지 않는 범위 내에서 회사가 보존관리하고 있는 전자금융거래와 관련된 기록 및 자료를 당해 이용자에게 제공하여야 한다.</li>
                                                    </ol>
                                                    <h2>제23조 (손실부담 및 면책)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사는 다음의 어느 하나에 해당하는 사고로 인해 이용자에게 손해가 발생한 경우에는 그 손해를 배상할 책임을 진다.
                                                            <ul class="dep2">
                                                                <li>접근매체의 위조나 변조로 발생한 사고</li>
                                                                <li>계약체결 또는 거래지시의 전자적 전송이나 처리 과정에 발생한 사고</li>
                                                                <li>전자금융거래를 위한 전자적 장치 또는 정보통신망에 침입하여 거짓이나 그 밖의 부정한 방법으로 획득한 접근매체의 이용으로 발생한 사고</li>
                                                            </ul>
                                                        </li>
                                                        <li>제1항의 규정에도 불구하고 회사는 다음 각 호에 어느 하나에 해당하는 경우에는 이용자에게 손해가 생기더라도 책임의 전부 또는 일부를 지지 아니한다.
                                                            <ul class="dep2">
                                                                <li>이용자가 접근매체를 제3자에게 대여하거나 사용을 위임하거나 양도 또는 담보 목적으로 제공한 경우</li>
                                                                <li>제3자가 권한 없이 이용자의 접근매체를 이용하여 전자금융거래를 할 수 있음을 알았거나 쉽게 알 수 있었음에도 불구하고 이용자가 자신의 접근매체를 누설 또는 노출하거나 방치한 경우</li>
                                                                <li>법인(「중소기업기본법」제2조제2항에 의한 소기업을 제외한다)인 이용자에게 손해가 발생한 경우로 회사가 사고를 방지하기 위하여 보안절차를 수립하고 이를 철저히 준수하는 등 합리적으로 요구되는 충분한 주의의무를 다한 경우</li>
                                                            </ul>
                                                        </li>
                                                        <li>이용자로부터 접근매체의 분실이나 도난의 통지를 받은 경우에는 회사는 그 때부터 제3자가 그 접근매체를 사용함으로 인하여 이용자에게 발생한 손해를 보상한다.</li>
                                                    </ol>
                                                    <h2>제24조 (이용자정보에 대한 비밀보장)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사는 관계법령에서 정한 경우를 제외하고 전자금융거래를 수행함에 있어서 알게 된 정보를 이용자 본인의 동의 없이는 타인에게 제공할 수 없다.</li>
                                                        <li>회사는 이용자의 개인정보가 도난, 분실, 변조 및 유출되지 않도록 전자적 장치에 대한 보안관리에 주의를 기울여야 하며, 회사의 관리소홀로 인한 이용자 정보의 도난, 분실, 변조 및 유출 시에는 회사가 책임을 진다.</li>
                                                    </ol>
                                                    <h2>제25조 (약관의 명시 및 변경 등)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사가 이 약관을 변경하고자 할 때에는 변경사유, 변경내용 및 적용일자 등을 명시하여 변경일 기준 1개월전에 게시 가능한 전자적 장치에 게시하고 이용자에게 통지하여야 한다. 다만, 법령의 개정이나 제도의 개선 등으로 인하여 긴급히 이 약관을 변경할 경우에는 즉시 이를 게시하고 통지한다.</li>
                                                        <li>이용자가 이의를 제기할 경우 회사는 이용자에게 적절한 방법으로 약관 변경내용을 통지하였음을 확인해 주어야 한다.</li>
                                                        <li>회사는 법령의 개정으로 인하여 긴급하게 약관을 변경한 때에는 변경된 약관을 전자적 장치에 최소 1월 이상 게시하고 이용자에게 통지하여야 한다.</li>
                                                        <li>이용자는 제1항 및 제2항의 고지 후 변경약관 시행일 전 영업일까지 전자적 장치나 기타 방법에 의한 통지로 전자금융거래계약을 해지할 수 있으며, 이 기간 내에 이용자의 서면에 의한 이의가 회사에 도달하지 않으면 이용자가 이를 승인한 것으로 본다.</li>
                                                    </ol>
                                                    <h2>제26조 (약관적용의 우선순위)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>회사와 이용자 사이에 개별적으로 합의한 사항이 이 약관에서 정한 사항과 다를 때에는 그 합의사항을 이 약관에 우선하여 적용한다.</li>
                                                        <li>전자금융거래에 관하여 이 약관에서 정하지 않은 사항에 대하여는 당해 개별약관 등을 적용한다.</li>
                                                    </ol>
                                                    <h2>제27조 (분쟁조정)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이용자는 전자금융거래의 처리에 관하여 이의가 있을 때에는 회사의 분쟁처리기구에 그 해결을 요구하거나 금융감독원 금융분쟁조정위원회, 한국소비자원 소비자분쟁조정위원회 등을 통하여 분쟁조정을 신청할 수 있다.</li>
                                                        <li>이용자가 회사의 본점이나 영업점 또는 회사의 분쟁처리기구에 이의를 제기한 경우 회사는 15일 이내에 이에 대한 조사 또는 처리결과를 이용자에게 알려야 한다.</li>
                                                        <li>회사는 손해배상 등 분쟁처리를 위한 분쟁처리책임자 및 담당자를 지정하고, 그 연락처를 관련 인터넷 홈페이지 등을 통하여 이용자가 쉽게 알 수 있도록 하여야 한다.</li>
                                                    </ol>
                                                    <h2>제28조 (준거법)</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이 약관에 따른 거래에 관하여 회사와 이용자 간에 분쟁이 발생한 경우, 회사의 본점 소재지 또는 이용자의 주소지를 관할 법원으로 한다.</li>
                                                        <li>이 약관에서 정하지 아니한 사항은 대한민국법령을 적용한다.</li>
                                                    </ol>
                                                    <h3>부칙</h3>
                                                    <ul class="ul-type">
                                                        <li>제1조(시행일) 이 약관은 2008년 2월 5일부터 시행한다.</li>
                                                        <li>제2조(경과조항) 이 약관은 약관시행일 이후의 전자금융거래에 적용된다.
                                                            <ul class="dep3 h-top">
                                                                <li>전자금융거래이용약관 시행일자 : 2008. 2. 5</li>
                                                                <li>전자금융거래이용약관 최종변경일자 : 2017. 4.28</li>
                                                                <li>전자금융거래이용약관 버전번호 : V1.1</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <h3>[전자금융거래 분쟁처리 책임자]</h3>
                                                    <ul class="ul-type">
                                                        <li>성명 : 서 민</li>
                                                        <li>직책 : 대표</li>
                                                        <li>이메일 : info@insurobo.co.kr</li>
                                                        <li>전화번호 : 070-4126-3333</li>
                                                    </ul>
                                                    <h3>[전자금융거래 분쟁처리 담당자]</h3>
                                                    <ul class="ul-type">
                                                        <li>성명 : 이청수</li>
                                                        <li>직책 : 사원</li>
                                                        <li>이메일 : info@insurobo.co.kr</li>
                                                        <li>전화번호 : 070-4126-3333</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
            
                                </body>
                                </html>
                                  `;
  return html;
};
export const wwTermsSf2 = () => {
  const html = `
                                <html>
                                <head>
                                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                                <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                                <style type="text/css">
                                  ${commonCss}
                                  ${defaultCss}
                                </style>
                                </head>
                                <body>
                                <!-- wrap -->
                                <div id="wrap" class="pop">

                                    <!-- container -->
                                    <div id="container">
                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">웹사이트(현대해상) 이용약관</h1>
                                                    <h2>제1조 목적</h2>
                                                    <div class="in-txt">이 약관은 현대해상화재보험주식회사(이하 "현대해상"이라 합니다)가 운영하는 현대해상 다이렉트홈페이지에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 합니다)를 이용함에 있어 홈페이지와 이용자의 권리ㆍ의무 및 책임사항을 규정함을 목적으로 합니다. 다만, 전자금융거래 이용에 관한 사항은 '전자금융거래 이용약관'의 내용을 따릅니다.</div>

                                                    <h2>제2조 정의</h2>
                                                    <ol class="ol-type numb">
                                                        <li>'현대해상 다이렉트 홈페이지'란 현대해상이 재화 또는 용역(보험상품)을 이용자에게 제공 및 안내하기 위하여 컴퓨터 등 정보통신 설비를 이용하여 재화 또는 용역(보험상품 및 대출상품 등)을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 홈페이지를 운영하는 사업자의 의미로도 사용합니다.</li>
                                                        <li>'이용자'란 현대해상 다이렉트 홈페이지에 접속하여 이 약관에 따라 현대해상 다이렉트 홈페이지가 제공하는 서비스를 받는 이용자를 말합니다.</li>
                                                    </ol>

                                                    <h2>제3조 약관의 명시와 개정</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자 등록번호, 연락처(전화 등) 등을 이용자가 알 수 있도록 현대해상 다이렉트 홈페이지의 초기 화면에 게시합니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지는 약관의 규제등에 관한 법률, 전자금융거래법, 전자거래기본법, 전자서명법, 정보통신망이용촉진 및 정보보호등에 관한 법률, 전자상거래 등에서의 소비자보호에 관한 법률, 방문판매 등에 관한 법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지의 약관을 개정할 경우에는 적용일 및 개정사유를 명시하여 현행 약관과 함께 홈페이지의 초기화면에 그 적용일 7일 이전부터 적용일 전일까지(약관의 내용이 이용자에게 불리할 경우에는 변경일 기준 1개월 전에) 공지합니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지의 약관을 개정할 경우에는 그 개정약관은 그 적용일 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 현대해상 다이렉트 홈페이지가 '이용자가 개정약관 공지 기간 내에 변경 약관에 대한 적용거절 여부를 표명하지 아니하는 때에는 변경약관의 적용을 받는 것으로 본다 '는 취지의 통지를 하였음에도 이용고객이 동의 여부를 표명하지 아니한 경우 또는 부득이하게 그러한 통지를 할 수 없는 경우에는 개정 전에 체결된 계약에도 개정약관이 적용됩니다.</li>
                                                        <li>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다.</li>
                                                    </ol>

                                                    <h2>제4조 서비스의 제공 및 변경</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상 다이렉트 홈페이지는 다음과 같은 업무를 수행합니다. 보험 상품의 설명 및 안내(E-mail 발송 등), 가입설계, 보험가입, 가입 신청 이용자(보험계약자 또는 피보험자에 한함)의 각종 보험계약 및 계약 변경을 포함한 현대해상 다이렉트 홈페이지가 정하는 업무</li>
                                                        <li>보험상품의 설명 및 안내(E-mail 발송 등), 가입설계, 가입신청</li>
                                                        <li>이용자(보험계약자 또는 피보험자에 한함)의 각종 보험계약 및 계약 변경 정보</li>
                                                        <li>기타 현대해상 다이렉트 홈페이지가 정하는 업무</li>
                                                        <li>현대해상 다이렉트 홈페이지는 불가피할 경우에 제1항에 정한 상품 및 서비스의 내용을 변경할 수 있으며, 이로 인하여 발생되는 문제에 대해서는 어떠한 책임도 부담하지 않습니다.</li>
                                                        <li>이 경우 변경된 내용 및 제공일을 명시하여 현재의 내용이 게시된 곳에 그 제공일 7일 이전부터 공지합니다. 단, 불가피한 여건이나 사정이 있는 경우, 위 공지를 하지 않을 수 있습니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지가 제공하기로 이용자와 계약을 체결한 서비스의 내용을 기술적 사양의 변경 등의 사유로 변경할 경우에는 현대해상 다이렉트 홈페이지는 이로 인하여 이용자가 입은 손해를 배상합니다. 단, 현대해상 다이렉트 홈페이지에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.</li>
                                                    </ol>
                                                    <h2>제5조 서비스의 중단</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상 다이렉트 홈페이지는 컴퓨터 등 정보통신설비의 보수점검ㆍ교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
                                                        <li>제1항에 의한 서비스 중단의 경우에는 현대해상 다이렉트 홈페이지는 제8조에 정한 방법으로 이용자에게 통지합니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지는 제1항의 사유로 홈페이지 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 현대해상 다이렉트 홈페이지에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.</li>
                                                    </ol>

                                                    <h2>제6조 본인 확인</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상 다이렉트 홈페이지는 안전한 금융 거래 서비스의 제공을 위하여 본인 인증을 적용하며 최소한의 정보를 수집합니다. 수집 정보는 본인인증을 위한 인증용도로 사용하며 저장하지 않습니다.</li>
                                                        <li>공인인증서를 통한 본인확인 시: 주민등록번호, 공인인증서 비밀번호</li>
                                                        <li>휴대폰을 통한 본인 확인 시: 휴대폰번호, 생년월일, 성별, 이름</li>
                                                    </ol>

                                                    <h2>제7조 개인정보보호</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상 다이렉트 홈페이지는 이용자의 정보 수집 시 서비스 제공에 필요한 최소한의 정보를 수집합니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지는 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지는 이용자의 정보를 이 약관에 명시한 범위를 넘어 이용하거나 제3자에게 제공하지 않습니다. 다만, 당해 이용자의 별도의 동의가 있거나 다음 각 호에 1에 해당하는 경우에는 예외로 합니다.</li>
                                                        <li>보험계약 체결, 유지 ,보험금지급 ,손해사정 등 계약관리에 필요한 최소한의 이용자의 정보(성명, 주민번호, 주소, 전화번호, E-mail 등)를 알려주는 경우</li>
                                                        <li>통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우</li>
                                                        <li>배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호, E-mail)를 알려주는 경우</li>
                                                        <li>법률에 특별한 규정이 있는 경우</li>
                                                        <li>현대해상 다이렉트 홈페이지는 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명, 전화번호 및 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는 자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진 및 정보보호 등에 관한 법률 제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다. 동의 철회 시에는 이용자의 당해 개인정보를 삭제하며 삭제된 이용자의 개인정보는 이용 또는 제 3자에 대한 제공을 금지합니다.</li>
                                                        <li>이용자는 언제든지 현대해상 다이렉트 홈페이지가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 현대해상 다이렉트 홈페이지는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 현대해상 다이렉트 홈페이지는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지는 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드 정보, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지 또는 그로부터 개인정보를 제공 받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.</li>
                                                        <li>기타 홈페이지 이용시의 개인정보 보호 관련사항은 현대해상 개인정보 보호정책에 준하여 적용됩니다.</li>
                                                    </ol>

                                                    <h2>제8조 개인정보의 수집목적 및 이용목적</h2>
                                                    <ol class="ol-type numb">
                                                        <li>수집된 정보는 홈페이지 서비스의 제공, 보험상품의 소개 등 현대해상 다이렉트 홈페이지를 이용하는 사용자에게 보다 적합하고 유용한 정보와 서비스를 적시에 제공하기 위해 개인정보를 수집하고, 수집 목적의 범위 내에서 이용합니다.</li>
                                                        <li>고객명, 주민등록번호: 보험료 계산 및 보험 계약, 보험 계약 관리를 위한 본인 확인 용도</li>
                                                        <li>E-Mail주소, 주소, 연락처: 계약관련 고지사항 전달, 본인 의사확인, 불만처리 등 원활한 의사소통 경로의 확보 및 서비스(각종 안내, 정보전달 등의 서비스 포함), 상품 안내(보험 상품 안내는 동의 고객에 한함.)</li>
                                                    </ol>

                                                    <h2>제9조 개인정보의 보유기간 및 이용기간</h2>
                                                    <div class="in-txt">
                                                        개인정보 수집이용 목적에 따라 동의서에 보유 기간을 명시하며 준수합니다.
                                                    </div>

                                                    <h2>제10조 개인정보의 수집목적 및 이용목적</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상 다이렉트 홈페이지는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는 데 최선을 다하여야 합니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지에 보험상품이나 서비스에 대하여 표시ㆍ광고의 공정화에 관한 법률 제3조 소정의 부당한 표시ㆍ광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지는 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.</li>
                                                    </ol>

                                                    <h2>제11조 이용자의 의무</h2>
                                                    <ol class="ol-type numb">
                                                        <li>이용자는 다음 행위를 하여서는 안됩니다.
                                                            <ul class="dep2">
                                                                <li>신청 또는 변경 시 허위내용의 등록</li>
                                                                <li>현대해상 다이렉트 홈페이지에 게시된 정보의 변경</li>
                                                                <li>현대해상 다이렉트 홈페이지에 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
                                                                <li>현대해상 다이렉트 홈페이지, 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                                                                <li>현대해상 다이렉트 홈페이지, 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                                                                <li>외설 또는 폭력적인 메시지ㆍ화상ㆍ음성 기타 공서양속에 반하는 정보를 홈페이지에 공개 또는 게시하는 행위</li>
                                                                <li>사실관계를 왜곡하는 정보제공 행위 등 기타 현대해상 다이렉트 홈페이지가 운영상 부적절하다고 판단하는 행위</li>
                                                                <li>다른 이용자의 개인정보를 수집 또는 저장하는 행위</li>
                                                            </ul>
                                                        </li>
                                                        <li>각 호의 정보가 홈페이지에 게시되거나 홈페이지와 링크된 곳에 게시된 경우, 현대해상 다이렉트 홈페이지는 이용자 및 기타 정보의 게시를 행한 자의 승낙 없이 당해 정보를 삭제하거나 홈페이지에 확장된 링크를 절단할 수 있습니다. 단, 현대해상 다이렉트 홈페이지는 이러한 정보의 삭제, 링크의 절단 등을 할 의무를 지지 않습니다.</li>
                                                    </ol>

                                                    <h2>제12조 현대해상 다이렉트 홈페이지와 피연결 현대해상 다이렉트 홈페이지 간의 관계</h2>
                                                    <ol class="ol-type numb">
                                                        <li>상위 홈페이지와 하위 홈페이지가 하이퍼링크(예 : 하이퍼링크 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 현대해상 다이렉트 홈페이지(웹 사이트)라고 하고 후자를 피연결 현대해상 다이렉트 홈페이지(웹 사이트)라고 합니다.</li>
                                                        <li>연결 현대해상 다이렉트 홈페이지는 피연결 현대해상 다이렉트 홈페이지가 독자적으로 제공하는 재화ㆍ용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을 지지 않는다는 뜻을 연결 현대해상 다이렉트 홈페이지의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을 지지 않습니다.</li>
                                                    </ol>

                                                    <h2>제13조 저작권의 귀속 및 이용제한</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상 다이렉트 홈페이지에 작성된 저작물에 대한 저작권 기타 지적재산권은 현대해상에 귀속합니다.</li>
                                                        <li>이용자는 현대해상 다이렉트 홈페이지를 이용함으로써 얻은 정보를 현대해상의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</li>
                                                    </ol>

                                                    <h2>제14조 분쟁조정</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상은 현대해상다이렉트 홈페이지 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상 처리기구를 설치ㆍ운영 합니다.</li>
                                                        <li>현대해상은 현대해상 다이렉트 홈페이지 이용자로부터 제출되는 불만사항 및 의견을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.</li>
                                                        <li>현대해상 다이렉트 홈페이지와 이용자 간에 발생한 분쟁은 전자금융거래법 제27조 및 동법 시행령 제14조에 의하여 회사의 분쟁처리기구에 그 해결을 요구하거나 금융감독원의 금융분쟁조정위원회, 한국소비자원의 소비자분쟁조정위원회 등을 통하여 분쟁조정을 신청할 수 있습니다.</li>
                                                    </ol>

                                                    <h2>제15조 재판권 및 준거법</h2>
                                                    <ol class="ol-type numb">
                                                        <li>현대해상 다이렉트 홈페이지와 이용자 간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기한다.</li>
                                                        <li>현대해상 다이렉트 홈페이지와 이용자 간에 제기된 전자거래 소송에는 대한민국법령을 적용합니다.</li>
                                                    </ol>
                                                    <div class="in-txt">(시행일: 2015년 7월 1일)</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
            
                                </body>
                                </html>
                                  `;
  return html;
};
export const wwTermsSf3 = () => {
  const html = `
                                <html>
                                <head>
                                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                                <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                                <style type="text/css">
                                  ${commonCss}
                                  ${defaultCss}
                                </style>
                                </head>
                                <body>
                                <!-- wrap -->
                                <div id="wrap" class="pop">

                                    <!-- container -->
                                    <div id="container">
                                        <!-- content -->
                                        <div id="content">
                                            <div class="cont-inner">                
                                                <div class="term">
                                                    <h1 class="first">예금자 보호안내</h1>
                                                    <div class="in-box">이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호한도는 본 보험회사에 있는 귀하의 모든 예금보호 대상 금융상품의 해지환급금(또는 만기 시 보험금이나 사고보험금)에 기타 지급금을 합하여 1인당 "최고 5천만원"이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- //content -->
                                    </div>
                                    <!-- // container -->

                                </div>
                                <!-- //wrap -->
            
                                </body>
                                </html>
                                  `;
  return html;
};

export const wwTermsSf4 = () => {
  const html = `
                                <html>
                                <head>
                                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                                <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                                <style type="text/css">
                                  ${commonCss}
                                  ${defaultCss}
                                </style>
                                </head>
                                <body>
                                <!-- wrap -->
                                    <div id="wrap" class="pop">

                                        <!-- container -->
                                        <div id="container">
                                            <!-- content -->
                                            <div id="content">
                                                <div class="cont-inner">                
                                                    <div class="term">
                                                        <h1 class="first">온라인 보험계약 고객센터 이용동의</h1>
                                                        <div class="in-box">온라인 보험계약은 가입만 가능하며, 계약해지시 현대해상 고객센터(1899-6782) 및 인슈로보 고객센터(070-4126-3333) 이용에 동의합니다.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- //content -->
                                        </div>
                                        <!-- // container -->

                                    </div>
                                    <!-- //wrap -->
            
                                </body>
                                </html>
                                  `;
  return html;
};

export const wwTerms2s1 = () => {
  const html = `
                                  <html>
                                  <head>
                                  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                                  <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                                  <style type="text/css">
                                    ${commonCss}
                                    ${defaultCss}
                                  </style>
                                  </head>
                                  <body>
                                  <!-- wrap -->
                                  <div id="wrap" class="pop">
                                  
                                      <!-- header -->
                                      <div class="headers">
                                          <h1 class="headerh1">상품안내 및 보장내용 자세히 보기</h1>
                                          <div class="btn-close"><button type="button"><span class="ir">닫기</span></button></div>
                                      </div>
                                      <!-- //header -->
                                  
                                      <!-- container -->
                                      <div id="container">
                                  
                                          <!-- content -->
                                          <div id="content">
                                              <div class="cont-inner">                
                                                  <div class="term">
                                                      <h2 class="first">1.상품안내</h2>
                                                      <ol class="ol-type">
                                                          <li>『다중이용업소의 안전에 관한 특별법』에 따른 다중이용업소의 화재, 폭발로 인해 타인의 신체장해 및 재물손해를 보장하는 의무가입 보험
                                                              <div class="info-txt2 bk">과태료에 대한 자세한 기준은 상기 시행령 참조(300만원 이하 과태료)</div>
                                                          </li>
                                                          <li>화재보험에 가입했다 하더라도 보장 범위가 다르기 때문에 화재배상책임보험에 가입해야 합니다.
                                                              <ul class="dep2">
                                                                  <li>화재보험 : 화재로 인한 재산상의 손해 보상</li>
                                                                  <li>화재배상책임보험 : 화재, 폭발, 붕괴로 인한 타인의 생명, 신체, 재산상의 손해 보상</li>
                                                              </ul>
                                                          </li>
                                                      </ol>
                                                      <h2>2.보장내용</h2>
                                                      <ol class="ol-type">
                                                          <li>의무가입 대상
                                                              <ul class="dep2">
                                                                  <li>다중이용업소 22개 업종
                                                                      <ul class="dep3">
                                                                          <li>휴게음식점, 제과점, 일반음식점(바닥 면적의 합계가 지상 100㎡, 지하66㎡이상)<br>
                                                                              단, 지상 1층은 의무가입대상에서 제외
                                                                          </li>
                                                                          <li>게임제공업, PC방, 복합유통게임업<br>
                                                                              단, 지상 1층은 의무가입대상에서 제외
                                                                          </li>
                                                                          <li>단란주점, 유흥주점, 학원, 목욕장, 노래연습장, 산후조리원, 고시원, 실내권총사격장, 실내골프연습장, 안마시술소, 전화방/화상대화방, 수면방, 콜라텍</li>
                                                                      </ul>
                                                                  </li>
                                                              </ul>
                                                          <li>보상한도액
                                                              <div class="tbl">
                                                                  <table>
                                                                      <colgroup>
                                                                          <col style="width:30%">
                                                                          <col style="width:20%">
                                                                          <col style="width:20%">
                                                                          <col style="width:30%">
                                                                      </colgroup>
                                                                      <thead>
                                                                          <tr>
                                                                              <th rowspan="2">구분</th>
                                                                              <th colspan="2">보상한도액</th>
                                                                              <th rowspan="2">자기부담금</th>
                                                                          </tr>
                                                                          <tr>
                                                                              <th class="bl">1인당</th>
                                                                              <th>1사고당</th>
                                                                          </tr>
                                                                      </thead>
                                                                      <tbody>
                                                                          <tr>
                                                                              <td class="ac">대인배상</td>
                                                                              <td class="ac">1.5억원</td>
                                                                              <td class="ac">없음</td>
                                                                              <td class="ac">없음</td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td class="ac">대물배상</td>
                                                                              <td class="ac">없음</td>
                                                                              <td class="ac">10억원</td>
                                                                              <td class="ac">없음</td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </div>
                                                          </li>
                                                          <li>보장내용
                                                              <div class="tbl">
                                                                  <table>
                                                                      <colgroup>
                                                                          <col style="width:20%">
                                                                          <col style="width:20%">
                                                                          <col style="width:60%">
                                                                      </colgroup>
                                                                      <tbody>
                                                                          <tr>
                                                                              <th>기본보장</th>
                                                                              <td class="ac">보통약관</td>
                                                                              <td>다중이용업소 업주가 자신의 시설 내에서 발생한 화재, 폭발로 제3자에 대한 법률상 배상책임
                                                                                  <div class="type-in">타인에 대한 신체장해 및 재물손해에 대한 손해배상금, 소송 및 변호사 비용 등</div>
                                                                              </td>
                                                                          </tr>
                                                                          <tr>
                                                                              <th rowspan="2">특약보장</th>
                                                                              <td class="ac">종업원배상책임보장제외<br>특별약관</td>
                                                                              <td>기본보장에서 보장하는 아래의 손해에 대해서 보장 제외 (동 특약 선택시 보험료 일부 할인 적용)
                                                                                  <div class="type-in">다중이용업소 업주가 자신의 시설의 화재 또는 폭발로 인하여 종업원에게 지게 되는 법률상 배상책임</div>
                                                                              </td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td class="ac bl">임차자<br>특별약관</td>
                                                                              <td>다중이용업소 업주 자신이 임차한 다중이용시설과 관련하여 부동산에 생긴 우연한 사고로 인하여 임대인에 지게 되는 법률상 배상책임</td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </div>
                                                          </li>
                                                          <li>보상하는 손해
                                                              <ul class="dep2">
                                                                  <li>피보험자가 피해자에게 지급할 책임을 지는 법률상의 손해배상금</li>
                                                                  <li>계약자 또는 피보험자가 지출한 아래의 비용
                                                                      <ul class="dep3">
                                                                          <li>피보험자가 손해의 방지 또는 경감을 위해 지출한 필요 또는 유익했던 비용</li>
                                                                          <li>피보험자가 제3자로부터 손해의 배상을 받을 수 있는 그 권리를 지키거나 행사하기 위해 지출한 필요 또는 유익했던 비용</li>
                                                                          <li>피보험자가 지급한 소송비용, 변호사비용, 중재, 화해 도는 조정에 관한 비용</li>
                                                                          <li>보험증권상의 보상한도액 내의 금액에 대한 공탁보증보험료. 그러나 회사는 그러한 보증을 제공할 책임은 부담하지 않음.</li>
                                                                          <li>피보험자가 회사의 요구에 따르기 위해 지출한 비용</li>
                                                                      </ul>
                                                                  </li>
                                                              </ul>
                                                          </li>
                                                      </ol>
                                                      <h2>3.유의사항(보험가입시 유의사항)</h2>
                                                      <ol class="ol-type">
                                                          <li>보상하지 않는 손해
                                                              <ul class="dep2">
                                                                  <li>계약자, 피보험자 또는 이들의 법정대리인의 고의로 생긴 손해에 대한 배상책임</li>
                                                                  <li>전쟁, 혁명, 내란, 사변, 테러, 폭동, 소용, 노동쟁의 기타 이들과 유사한 사태로 생신 손해에 대한 배상책임</li>
                                                                  <li>지진, 분화, 홍수, 해일 또는 이와 비슷한 천재지변으로 생긴 손해에 대한 배상책임</li>
                                                                  <li>피보험자와 타인간에 손해배상에 관한 약정이 있는 경우, 그 약정에 의거하여 가중된 배상책임</li>
                                                                  <li>핵연료 물질 또는 핵연료 물질에 의해 오염된 물질의 방사성, 폭발성 그 밖의 유해한 특성 또는 이들의 특성에 의한 사고로 생긴 손해에 대한 배상책임</li>
                                                                  <li>방사선을 쬐는 것 또는 방사능 오염으로 인한 손해에 대한 배상책임</li>
                                                                  <li>티끌, 먼지, 석면, 분진 또는 소음으로 생긴 손해에 대한 배상책임</li>
                                                                  <li>전자파, 전자장(EMF)으로 생긴 손해에 대한 배상책임</li>
                                                                  <li>벌과금 및 징벌적 손해에 대한 배상책임</li>
                                                                  <li>에너지 및 관리할 수 있는 자연력, 상표권, 특허권 등 무체물에 입힌 손해에 대한 배상책임</li>
                                                                  <li>통상적이거나 급격한 사고에 의한 것인가의 여부에 관계없이 공해물질의 배출, 방출, 누출, 넘쳐흐름 또는 유출로 생긴 손해에 대한 배상책임 및 오염제거비용</li>
                                                                  <li>배출시설에서 통상적으로 배출되는 배수 또는 배기(연기 포함)로 생긴 손해에 대한 배상책임</li>
                                                                  <li>선박 또는 항공기의 소유, 관리 또는 점유로 인한 손해에 대한 배상책임</li>
                                                                  <li>화재(붕괴, 폭발 포함)사고를 수반하지 않은 자동차사고로 인한 손해에 대한 배상책임
                                                                      <ul class="dep3">
                                                                          <li>[핵연료 물질] → 사용된 연료를 포함</li>
                                                                          <li>[핵연료 물질에 의해 오염된 물질] → 원자핵 분열 생성물을 포함</li>
                                                                      </ul>
                                                                  </li>
                                                              </ul>
                                                          </li>
                                                          <li>보험모집질서위반
                                                              <ul class="dep2">
                                                                  <li>보험계약 청약과 관련 특별이익을 제공하는 등 보험모집질서 위반행위는 보험업법에 의해 처벌 받을 수 있습니다.</li>
                                                                  <li>금육감독원 위반행위 신고 센터
                                                                      <ul class="dep3">
                                                                          <li>전화 : 국번없이 <a href="tel:1332">1332</a></li>
                                                                          <li>휴대전화 : <a href="tel:02-1332">02-1332</a></li>
                                                                          <li>인터넷 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a> 내 “보험모집질서위반신고”</li>
                                                                      </ul>
                                                                  </li>
                                                                  <li>손해보험협회
                                                                      <ul class="dep3">
                                                                          <li>전화 : <a href="tel:02-3702-8585">02-3702-8585</a></li>
                                                                          <li>팩스 : 02-3702-8691</li>
                                                                          <li>인터넷 : <a href="https://www.knia.or.kr/main" target="_blank">www.knia.or.kr</a> 내 “모집질서문란 신고센터＂</li>
                                                                      </ul>
                                                                  </li>
                                                              </ul>
                                                          </li>
                                                          <li>보험료 환급
                                                              <div class="dep2">순수 보장성 상품으로 만기 시 환급금이 없습니다.
                                                                  <div class="info-txt2 bk">
                                                                      기타 자세한 사항은 약관의 내용을 따릅니다.
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li>보험계약상의 알릴 의무
                                                              <ul class="dep2">
                                                                  <li>계약 전 알릴 의무
                                                                      <div class="dep3">
                                                                      계약을 맺을 때에 계약자, 피보험자 또는 이들의 대리인은 계약 청약서(질문서를 포함. 이하 동일)의 기재사항에 관하여 아는 사실을 빠짐없이
                                                                      그대로 회사에 알려야 합니다. 인터넷 계약의 경우 입력사항을 정확하게 기재해 주셔야 합니다.
                                                                      </div>
                                                                  </li>
                                                                  <li>계약 후 알릴 의무
                                                                      <ul class="dep3">
                                                                          <li>이 계약에서 담보하는 위험과 동일한 위험에 대해서 다른 회사와 다른 계약을 맺을 때</li>
                                                                          <li>보험의 목적물을 양도할 때</li>
                                                                          <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 구조를 변경, 개축, 증축하거나 계속하여 15일 이상 수선하는 경우</li>
                                                                          <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 용도를 변경함으로써 위험이 변경하는 경우</li>
                                                                          <li>보험의 목적인 건물 또는 보험의 목적이 들어있는 건물을 계속하여 30일 이상 비워 두거나 휴업하는 경우</li>
                                                                          <li>위 이외의 위험이 뚜렷이 증가할 경우</li>
                                                                          <li>알릴 의무를 위반하신 경우 계약을 해지하거나 보험금 지급이 제한될 수 있습니다.
                                                                              <div class="info-txt2 bk">
                                                                                  기타 자세한 사항은 약관의 내용을 따릅니다.
                                                                              </div>
                                                                          </li>
                                                                      </ul>                                    
                                                                  </li>
                                                              </ul>
                                                          </li>
                                                          <li>3대 기본 지키기 및 계약자 의무사항
                                                              <ul class="dep2">
                                                                  <li>자필서명 (인터넷 계약은 공동인증을 통해 대체될 수 있음)</li>
                                                                  <li>청약서 부본전달 (인터넷 계약은 예외)</li>
                                                                  <li>보험약관전달 (인터넷 계약은 이메일 등 전자적 수단에 의해 전달될 수 있음)
                                                                      <div class="info-txt2 bk">3대 기본 지키기 미이행시는 계약성립일로부터 3개월 이내에 계약을 취소할 수 있습니다.</div>
                                                                  </li>
                                                              </ul>
                                                          </li>
                                                          <li>청약철회 청구제도
                                                              <ul class="dep2">
                                                                  <li>보험계약자는 보험증권을 받은 날부터 15일 이내에 그 청약을 철회할 수 있으며, 이 경우 3일 이내에 보험료를 돌려드립니다.<br>
                                                                  다만, 진단계약, 보험기간이 1년 미만인 계약 또는 전문보험계약자가 체결한 계약 및 청약을 한 날로부터 30일을 초과하는 경우에는 청약을 철회할 수 없습니다.<br>
                                                                  청약철회 기간 내에 청약철회를 하실 경우 납입한 보험료 전액을 돌려받으실 수 있습니다.
                                                                  </li>
                                                                  <li>전문보험계약자
                                                                      <div class="dep3">
                                                                          보험계약에 관한 전문성, 자산규모 등에 비추어 보험계약의 내용을 이해하고 이행할 능력이 있는 자로서 보험업법 제2조(정의),
                                                                          보험업법시행령 제6조의 2(전문보험계약자의 범위 등) 도는 보험업감독규정 제1-4조의 2(전문보험계약자의 범위)에서 정한 국가, 한국은행, 
                                                                          대통령령으로 정하는 금융기관, 주권상장법인, 지방자치단체, 단체보험계약자 등의 전문보험계약자를 말합니다.
                                                                      </div>
                                                                  </li>
                                                              </ul>
                                                          </li>
                                                          <li>상담 및 보험분쟁조정안내
                                                              <ul class="dep2">
                                                                  <li>보험에 대한 문의사항 및 불만사항이 있을 경우 현대해상(전화 <a href="tel:1588-5656">1588-5656</a> / 인터넷 <a href="https://www.hi.co.kr/index.jsp" target="_blank">hi.co.kr</a> &gt; 전자민원접수) 또는
                                                                      인슈로보(전화 <a href="tel:070-4126-3333">070-4126-3333</a> / 카카오톡채널 “인슈로보”)로 연락주시면 신속하게 처리해 드립니다.<br>
                                                                      또한 보험에 관한 분쟁이 있을 때에는 금융감독원 및 한국소비자원에 분쟁조정을 신청하실 수 있습니다.
                                                                  </li>
                                                                  <li>금융감독원
                                                                      <ul class="dep3">
                                                                          <li>전화 : <a href="tel:1332">1332</a></li>
                                                                          <li>홈페이지 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a></li>
                                                                          <li>e-금융센터 : <a href="https://www.fcsc.kr/" target="_blank">www.fcsc.kr</a>)</li>
                                                                      </ul>
                                                                  </li>
                                                                  <li>한국소비자원
                                                                      <ul class="dep3">
                                                                          <li>전화 : <a href="tel:1372">1372</a></li>
                                                                          <li>홈페이지 : <a href="https://www.kca.go.kr/home/main.do" target="_blank">www.kca.go.kr</a>)</li>
                                                                      </ul>
                                                                  </li>
                                                              </ul>
                                                              <li>계약자배당에 관한 사항
                                                                  <div class="dep2">무배당 상품으로 배당을 하지 않습니다.</div>
                                                              </li>
                                                              <li>보험계약체결
                                                                  <ul class="dep2">
                                                                      <li>보험계약 체결 전에 상품설명서 및 약관을 읽어 보시기 바랍니다.</li>
                                                                      <li>기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 안상 또는 보장내용이 달라질 수 있습니다.</li>
                                                                  </ul>
                                                              </li>
                                                              <li>예금자 보호안내
                                                                  <div class="dep2">
                                                                      이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 귀하의 모든 예금보호 대상 금융상품의
                                                                      해약환급금(또는 만기시 보험금이나 사고 보험금)에 기타지급금을 합하여 1인당 “최고 5천만원＂이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.
                                                                      또한, 보험계약자 및 보험료 납부자가 법인이면 보호되지 않습니다.
                                                                      <div class="info-txt2 bk">
                                                                          위 내용은 예금자보호법 및 관련 법령의 개정에 따라 달라질 수 있으며, 자세한 내용은 예금보험공사(<a href="http://www.kdic.or.kr/main.do" target="_blank">www.kdic.or.kr</a>)로 문의 바랍니다.
                                                                      </div>
                                                                  </div>
                                                              </li>
                                                          </li>
                                                      </ol>       
                                                  </div>
                                              </div>
                                          </div>
                                          <!-- //content -->
                                          <div class="btn-btt">
                                              <button type="button" class="action">확인</button>
                                          </div>
                                      </div>
                                      <!-- // container -->
                                  
                                  </div>
                                  <!-- //wrap -->
              
                                  </body>
                                  </html>
                                    `;
  return html;
};

export const wwTerms2s2 = () => {
  const html = `
                                    <html>
                                    <head>
                                    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
                                    <link rel="stylesheet" type="text/css" href="../src/style/common.css">  
                                    <style type="text/css">
                                      ${commonCss}
                                      ${defaultCss}
                                    </style>
                                    </head>
                                    <body>
                                    <!-- wrap -->
<div id="wrap" class="pop">

	<!-- header -->
	<div class="headers">
		<h1 class="headerh1">상품안내 및 보장내용 자세히 보기</h1>
		<div class="btn-close"><button type="button"><span class="ir">닫기</span></button></div>
	</div>
	<!-- //header -->

	<!-- container -->
	<div id="container">

		<!-- content -->
		<div id="content">
			<div class="cont-inner">                
                <div class="term">
                    <h2 class="first">1.상품안내</h2>
                    <ol class="ol-type">
                        <li>『재난 및 안전관리 기본법령』에 따른 화재, 폭발, 붕괴 등으로 인한 제3자의 인명재산 피해 보상을 위한 의무가입보험.
                            <div class="info-txt2 bk">피보험자가 입은 신체상의 손해 및 피보험자 소유, 점유 또는 관리하는 시설 및 재산 손해는 보상하지 않음</div>
                        </li>
                        <li>화재보험에 가입했다 하더라도 재난 배상책임보험에 가입해야 합니다.
                            <ul class="dep2">
                                <li>화재보험 : 화재로 인한 재산상의 손해 보상</li>
                                <li>화재배상책임보험 : 화재, 폭발, 붕괴로 인한 타인의 생명, 신체, 재산상의 손해 보상</li>
                            </ul>
                        </li>
                    </ol>
                    <h2>2.보장내용</h2>
                    <ol class="ol-type">
                        <li>의무가입 대상
                            <ul class="dep2">
                                <li>『재난 및 안전관리 기본법』 제 76조에 따른 음식점 등 20개 업종
                                    <div class="dep3">일련번호 조회로 가입대상 여부 확인 가능</div>
                                </li>
                            </ul>
                        <li>보상한도
                            <div class="tbl">
                                <table>
                                    <colgroup>
                                        <col style="width:30%">
                                        <col style="width:20%">
                                        <col style="width:20%">
                                        <col style="width:30%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th rowspan="2">구분</th>
                                            <th colspan="2">보상한도액</th>
                                            <th rowspan="2">자기부담금</th>
                                        </tr>
                                        <tr>
                                            <th class="bl">1인당</th>
                                            <th>1사고당</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="ac">대인배상(재난)</td>
                                            <td class="ac">1.5억원</td>
                                            <td class="ac">없음</td>
                                            <td class="ac">없음</td>
                                        </tr>
                                        <tr>
                                            <td class="ac">대물배상(재난)</td>
                                            <td class="ac">없음</td>
                                            <td class="ac">10억원</td>
                                            <td class="ac">없음</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>보상하는 손해
                            <ul class="dep2">
                                <li>피보험자가 피해자에게 지급할 책임을 지는 법률상의 손해배상금(단, 피보험자의 과실여부를 불문함)</li>
                                <li>계약자 또는 피보험자가 지출한 아래의 비용
                                    <ul class="dep3">
                                        <li>피보험자가 손해의 방지 또는 경감을 위해 지출한 필요 또는 유익했던 비용</li>
                                        <li>피보험자가 제3자로부터 손해의 배상을 받을 수 있는 그 권리를 지키거나 행사하기 위해 지출한 필요 또는 유익했던 비용</li>
                                        <li>피보험자가 지급한 소송비용, 변호사비용, 중재, 화해 도는 조정에 관한 비용</li>
                                        <li>보험증권상의 보상한도액 내의 금액에 대한 공탁보증보험료. 그러나 회사는 그러한 보증을 제공할 책임은 부담하지 않음.</li>
                                        <li>피보험자가 회사의 요구에 따르기 위해 지출한 비용</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <h2>3.유의사항</h2>
                    <ol class="ol-type">
                        <li>보상하지 않는 손해
                            <ul class="dep2">
                                <li>계약자, 피보험자 또는 이들의 법정대리인의 고의로 생긴 손해에 대한 배상책임</li>
                                <li>전쟁, 혁명, 내란, 사변, 테러, 폭동, 소용, 노동쟁의 기타 이들과 유사한 사태로 생신 손해에 대한 배상책임</li>
                                <li>지진, 분화, 홍수, 해일 또는 이와 비슷한 천재지변으로 생긴 손해에 대한 배상책임</li>
                                <li>피보험자와 타인간에 손해배상에 관한 약정이 있는 경우, 그 약정에 의거하여 가중된 배상책임</li>
                                <li>핵연료 물질 또는 핵연료 물질에 의해 오염된 물질의 방사성, 폭발성 그 밖의 유해한 특성 또는 이들의 특성에 의한 사고로 생긴 손해에 대한 배상책임</li>
                                <li>방사선을 쬐는 것 또는 방사능 오염으로 인한 손해에 대한 배상책임</li>
                                <li>티끌, 먼지, 석면, 분진 또는 소음으로 생긴 손해에 대한 배상책임</li>
                                <li>전자파, 전자장(EMF)으로 생긴 손해에 대한 배상책임</li>
                                <li>벌과금 및 징벌적 손해에 대한 배상책임</li>
                                <li>에너지 및 관리할 수 있는 자연력, 상표권, 특허권 등 무체물에 입힌 손해에 대한 배상책임</li>
                                <li>통상적이거나 급격한 사고에 의한 것인가의 여부에 관계없이 공해물질의 배출, 방출, 누출, 넘쳐흐름 또는 유출로 생긴 손해에 대한 배상책임 및 오염제거비용</li>
                                <li>배출시설에서 통상적으로 배출되는 배수 또는 배기(연기 포함)로 생긴 손해에 대한 배상책임</li>
                                <li>선박 또는 항공기의 소유, 관리 또는 점유로 인한 손해에 대한 배상책임</li>
                                <li>화재(붕괴, 폭발 포함)사고를 수반하지 않은 자동차사고로 인한 손해에 대한 배상책임
                                    <ul class="dep3">
                                        <li>[핵연료 물질] → 사용된 연료를 포함</li>
                                        <li>[핵연료 물질에 의해 오염된 물질] → 원자핵 분열 생성물을 포함</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>보험모집질서위반
                            <ul class="dep2">
                                <li>보험계약 청약과 관련 특별이익을 제공하는 등 보험모집질서 위반행위는 보험업법에 의해 처벌 받을 수 있습니다.</li>
                                <li>금육감독원 위반행위 신고 센터
                                    <ul class="dep3">
                                        <li>전화 : 국번없이 <a href="tel:1332">1332</a></li>
                                        <li>휴대전화 : <a href="tel:02-1332">02-1332</a></li>
                                        <li>인터넷 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a> 내 “보험모집질서위반신고”</li>
                                    </ul>
                                </li>
                                <li>손해보험협회
                                    <ul class="dep3">
                                        <li>전화 : <a href="tel:02-3702-8585">02-3702-8585</a></li>
                                        <li>팩스 : 02-3702-8691</li>
                                        <li>인터넷 : <a href="https://www.knia.or.kr/main" target="_blank">www.knia.or.kr</a> 내 “모집질서문란 신고센터＂</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>보험료 환급
                            <div class="dep2">순수 보장성 상품으로 만기 시 환급금이 없습니다.
                                <div class="info-txt2 bk">
                                    기타 자세한 사항은 약관의 내용을 따릅니다.
                                </div>
                            </div>
                        </li>
                        <li>보험계약상의 알릴 의무
                            <ul class="dep2">
                                <li>계약 전 알릴 의무
                                    <div class="dep3">
                                    계약을 맺을 때에 계약자, 피보험자 또는 이들의 대리인은 계약 청약서(질문서를 포함. 이하 동일)의 기재사항에 관하여 아는 사실을 빠짐없이
                                    그대로 회사에 알려야 합니다. 인터넷 계약의 경우 입력사항을 정확하게 기재해 주셔야 합니다.
                                    </div>
                                </li>
                                <li>계약 후 알릴 의무
                                    <ul class="dep3">
                                        <li>이 계약에서 담보하는 위험과 동일한 위험에 대해서 다른 회사와 다른 계약을 맺을 때</li>
                                        <li>보험의 목적물을 양도할 때</li>
                                        <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 구조를 변경, 개축, 증축하거나 계속하여 15일 이상 수선하는 경우</li>
                                        <li>보험의 목적 또는 보험의 목적을 수용하는 건물의 용도를 변경함으로써 위험이 변경하는 경우</li>
                                        <li>보험의 목적인 건물 또는 보험의 목적이 들어있는 건물을 계속하여 30일 이상 비워 두거나 휴업하는 경우</li>
                                        <li>위 이외의 위험이 뚜렷이 증가할 경우</li>
                                        <li>알릴 의무를 위반하신 경우 계약을 해지하거나 보험금 지급이 제한될 수 있습니다.
                                            <div class="info-txt2 bk">
                                                기타 자세한 사항은 약관의 내용을 따릅니다.
                                            </div>
                                        </li>
                                    </ul>                                    
                                </li>
                            </ul>
                        </li>
                        <li>3대 기본 지키기 및 계약자 의무사항
                            <ul class="dep2">
                                <li>자필서명 (인터넷 계약은 공동인증을 통해 대체될 수 있음)</li>
                                <li>청약서 부본전달 (인터넷 계약은 예외)</li>
                                <li>보험약관전달 (인터넷 계약은 이메일 등 전자적 수단에 의해 전달될 수 있음)
                                    <div class="info-txt2 bk">3대 기본 지키기 미이행시는 계약성립일로부터 3개월 이내에 계약을 취소할 수 있습니다.</div>
                                </li>
                            </ul>
                        </li>
                        <li>청약철회 청구제도
                            <ul class="dep2">
                                <li>보험계약자는 보험증권을 받은 날부터 15일 이내에 그 청약을 철회할 수 있으며, 이 경우 3일 이내에 보험료를 돌려드립니다.<br>
                                다만, 진단계약, 보험기간이 1년 미만인 계약 또는 전문보험계약자가 체결한 계약 및 청약을 한 날로부터 30일을 초과하는 경우에는 청약을 철회할 수 없습니다.<br>
                                청약철회 기간 내에 청약철회를 하실 경우 납입한 보험료 전액을 돌려받으실 수 있습니다.
                                </li>
                                <li>전문보험계약자
                                    <div class="dep3">
                                        보험계약에 관한 전문성, 자산규모 등에 비추어 보험계약의 내용을 이해하고 이행할 능력이 있는 자로서 보험업법 제2조(정의),
                                        보험업법시행령 제6조의 2(전문보험계약자의 범위 등) 도는 보험업감독규정 제1-4조의 2(전문보험계약자의 범위)에서 정한 국가, 한국은행, 
                                        대통령령으로 정하는 금융기관, 주권상장법인, 지방자치단체, 단체보험계약자 등의 전문보험계약자를 말합니다.
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>상담 및 보험분쟁조정안내
                            <ul class="dep2">
                                <li>보험에 대한 문의사항 및 불만사항이 있을 경우 현대해상(전화 <a href="tel:1588-5656">1588-5656</a> / 인터넷 <a href="https://www.hi.co.kr/index.jsp" target="_blank">hi.co.kr</a> &gt; 전자민원접수) 또는
                                    인슈로보(전화 <a href="tel:070-4126-3333">070-4126-3333</a> / 카카오톡채널 “인슈로보”)로 연락주시면 신속하게 처리해 드립니다.<br>
                                    또한 보험에 관한 분쟁이 있을 때에는 금융감독원 및 한국소비자원에 분쟁조정을 신청하실 수 있습니다.
                                </li>
                                <li>금융감독원
                                    <ul class="dep3">
                                        <li>전화 : <a href="tel:1332">1332</a></li>
                                        <li>홈페이지 : <a href="http://www.fss.or.kr/fss/kr/main.html" target="_blank">www.fss.or.kr</a></li>
                                        <li>e-금융센터 : <a href="https://www.fcsc.kr/" target="_blank">www.fcsc.kr</a>)</li>
                                    </ul>
                                </li>
                                <li>한국소비자원
                                    <ul class="dep3">
                                        <li>전화 : <a href="tel:1372">1372</a></li>
                                        <li>홈페이지 : <a href="https://www.kca.go.kr/home/main.do" target="_blank">www.kca.go.kr</a>)</li>
                                    </ul>
                                </li>
                            </ul>
                            <li>계약자배당에 관한 사항
                                <div class="dep2">무배당 상품으로 배당을 하지 않습니다.</div>
                            </li>
                            <li>보험계약체결
                                <ul class="dep2">
                                    <li>보험계약 체결 전에 상품설명서 및 약관을 읽어 보시기 바랍니다.</li>
                                    <li>기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 안상 또는 보장내용이 달라질 수 있습니다.</li>
                                </ul>
                            </li>
                            <li>예금자 보호안내
                                <div class="dep2">
                                    이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 귀하의 모든 예금보호 대상 금융상품의
                                    해약환급금(또는 만기시 보험금이나 사고 보험금)에 기타지급금을 합하여 1인당 “최고 5천만원＂이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.
                                    또한, 보험계약자 및 보험료 납부자가 법인이면 보호되지 않습니다.
                                    <div class="info-txt2 bk">
                                        위 내용은 예금자보호법 및 관련 법령의 개정에 따라 달라질 수 있으며, 자세한 내용은 예금보험공사(<a href="http://www.kdic.or.kr/main.do" target="_blank">www.kdic.or.kr</a>)로 문의 바랍니다.
                                    </div>
                                </div>
                            </li>
                        </li>
                    </ol>       
                </div>
			</div>
		</div>
		<!-- //content -->
		<div class="btn-btt">
			<button type="button" class="action">확인</button>
		</div>
	</div>
	<!-- // container -->

</div>
<!-- //wrap -->
                
                                    </body>
                                    </html>
                                      `;
  return html;
};
