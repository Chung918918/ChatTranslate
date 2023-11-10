async function submitToAPI() {
    // 获取下拉框和输入框的值
    const gender2Value = document.getElementById('gender2Select').value;
    const genderValue = document.getElementById('genderSelect').value;
    const ageValue = document.getElementById('ageSelect').value;
    const messageValue = document.getElementById('inputMessage').value.trim();
    if (!messageValue) {
        alert('请输入信息！');
        return;
    }

    // 组合文字
    const combinedMessage =`在韩国，我们都是股民。我是${genderValue}的，对方是${gender2Value}的，并且年龄${ageValue} 。我想向对方说：“${messageValue}”。以韩国人说话的方式，我应该怎么用韩语来表达这句话？`;
    // 在页面上显示发送给API的请求
    document.getElementById('apiRequest').textContent = `发送给API的请求: ${combinedMessage}`;
    document.getElementById('apiResponse').textContent = '请耐心等待，正在分析中...';
    // 调用API
    const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
    const apiKey = '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'; 
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: combinedMessage }
                ]
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API response:', data);
        const reply = data.choices[0].message.content;

        // 显示API返回的结果
        document.getElementById('apiResponse').textContent = reply;
    } catch (error) {
        console.error('Error sending message to ChatGPT:', error);
        document.getElementById('apiResponse').textContent = '获取API反馈失败。';
    }

}


async function submitToAPI2() {
    // 获取下拉框和输入框的值
    const messageValue = document.getElementById('inputMessage2').value.trim();
    if (!messageValue) {
        alert('请输入信息！');
        return;
    }

    // 组合文字
    const combinedMessage =`在韩国，对方说“${messageValue}”，请帮我用中国人能理解的方式，用中文表达给我。并且帮我理解一下这句话还有没有开玩笑之类的意思。`;
    // 在页面上显示发送给API的请求
    document.getElementById('apiRequest2').textContent = `发送给API的请求: ${combinedMessage}`;
    document.getElementById('apiResponse2').textContent = '请耐心等待，正在分析中...';
    // 调用API
    const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
    const apiKey = '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'; 
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: combinedMessage }
                ]
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API response:', data);
        const reply = data.choices[0].message.content;

        // 显示API返回的结果
        document.getElementById('apiResponse2').textContent = reply;
    } catch (error) {
        console.error('Error sending message to ChatGPT:', error);
        document.getElementById('apiResponse2').textContent = '获取API反馈失败。';
    }

}
