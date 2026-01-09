const username = localStorage.getItem('username');

function buyContent(file){
    if(!username){
        alert('请先登录');
        window.location.href = 'login.html';
        return;
    }

    if(confirm('模拟支付: 是否支付 10 元购买内容？')){
        let purchased = JSON.parse(localStorage.getItem('purchased')) || [];
        if(!purchased.includes(file)){
            purchased.push(file);
            localStorage.setItem('purchased', JSON.stringify(purchased));
        }
        alert('购买成功，可在用户中心查看！');
    }
}
