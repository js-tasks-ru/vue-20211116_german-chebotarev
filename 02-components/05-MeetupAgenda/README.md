# MeetupAgenda

👷🏻 _Задача нормальной сложности_\
💼 _Часть проекта_

<!--start_statement-->

Требуется разработать пару компонентов **MeetupAgenda** и **MeetupAgendaItem**.

Компонент **MeetupAgendaItem** выводит один пункт программы митапа:

- Единственный обязательный входной параметр `agendaItem` - объект с данными пункта программы;
- У каждого типа пункта программы есть своя иконка (см. `agendaItemIcons`);
- Для доклада (`type === 'talk'`) требуется дополнительно вывести докладчика и язык;
- Если у пункта программы отсутствует заголовок (`title`), то требуется заголовок по умолчанию для данного типа элемента
  программы (см. `agendaItemDefaultTitles`);
- Если у пункта программы отсутствует описание (`description`), его не требуется выводить.

Компонент **MeetupAgenda** выводит программу митапа с помощью **MeetupAgendaItem**:

- Единственный обязательный входной параметр `agenda` - массив с программой митапа;
- Каждый пункт программы выводится с **MeetupAgendaItem**.

Вспомогательные константы находятся в `meetupService.js`.

<img src="https://i.imgur.com/3MYSEun.png" style="max-width: 100%"  alt="Example"/>

_В этом модуле требуется разбить страницу митапа, на компоненты. В конце в задаче **MeetupPageComponent** они собираются
в одну страницу:_

<img src="https://i.imgur.com/gZFOxnY.png" style="max-width: 50%"  alt="Example"/>

<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файлы: `MeetupAgenda.js`, `MeetupAgendaItem.js`.

🚀 Команда запуска для ручного тестирования: `npm run file-serve`;\
приложение будет доступно на [http://localhost:5000/02-components/05-MeetupAgenda/](http://localhost:5000/02-components/05-MeetupAgenda/).

✅ Доступно автоматическое тестирование: `npm test MeetupAgenda`.
