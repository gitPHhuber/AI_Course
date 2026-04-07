export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <h4>AI Мастер</h4>
          <p>Практический онлайн-курс по работе с ИИ для бизнеса, фриланса и личной продуктивности.</p>
          <div className="footer-socials">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">✈</a>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте">⚡</a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
            <a href="https://dzen.ru/" target="_blank" rel="noopener noreferrer" aria-label="Дзен">Z</a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Курс</h5>
          <ul>
            <li><a href="#program">Программа</a></li>
            <li><a href="#pricing">Тарифы</a></li>
            <li><a href="#free">Бесплатный урок</a></li>
            <li><a href="#">Кейсы</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Документы</h5>
          <ul>
            <li><a href="#">Договор-оферта</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Согласие на обработку ПДн</a></li>
            <li><a href="#">Возврат средств</a></li>
            <li><a href="#">Реквизиты</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Поддержка</h5>
          <p><strong style={{ color: 'var(--text)' }}>+7 (800) 555-08-15</strong><br />
            бесплатно по РФ</p>
          <p><a href="mailto:support@aimaster.ru">support@aimaster.ru</a></p>
          <p>Пн–Пт, 10:00–19:00 МСК</p>
        </div>
      </div>

      <div className="footer-legal">
        ИП Костюков Илья Сергеевич · ИНН 770000000000 · ОГРНИП 320774600000000 ·
        Юридический адрес: 119991, г. Москва, Ленинский пр-т, 32А, оф. 415.
        Информация на сайте не является публичной офертой и носит ознакомительный характер.
      </div>

      <div className="footer-bottom">
        <span>© 2026 AI Мастер. Все права защищены.</span>
        <span>Сделано с заботой о ваших навыках в ИИ</span>
      </div>
    </footer>
  )
}
