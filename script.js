document.addEventListener("DOMContentLoaded", function() {
    // Função para obter e exibir as informações de IP
    const showIpInfoBtn = document.getElementById('showIpInfoBtn');
    const locationSpan = document.getElementById('location');
    const ipSpan = document.getElementById('ip');
    const organizationSpan = document.getElementById('organization');
    const timezoneSpan = document.getElementById('timezone');

    showIpInfoBtn.addEventListener('click', function() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;
                return fetch(`https://ipinfo.io/${ip}?token=3cbd916eaee90a`);
            })
            .then(response => response.json())
            .then(ipInfo => {
                locationSpan.textContent = `${ipInfo.city}, ${ipInfo.region}, ${ipInfo.country}`;
                ipSpan.textContent = ipInfo.ip;
                organizationSpan.textContent = ipInfo.org;
                timezoneSpan.textContent = ipInfo.timezone;
            })
            .catch(error => {
                console.error('Error fetching IP information:', error);
                locationSpan.textContent = 'Error loading';
                ipSpan.textContent = 'Error loading';
                organizationSpan.textContent = 'Error loading';
                timezoneSpan.textContent = 'Error loading';
            });
    });
});
