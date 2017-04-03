
window.addEventListener('beforeunload', function () {
   localStorage.setItem('content', JSON.stringify(articleModel.articles));
    localStorage.setItem('tag', JSON.stringify(articleModel.tags));

});
var articleModel = (function () {
    var articles;

    if(localStorage.getItem('content') != null){
        articles = JSON.parse(localStorage.getItem('content')) || [];
        for (var i=0; i<articles.length; i++) {
            articles[i].createdAt = new Date(articles[i].createdAt);
       }
    }
    else {
        articles = [
            {
                id: '1',
                title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
                summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2. Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
                createdAt: new Date('2017-02-27T09:00:00'),
                author: 'Иванов Иван',
                content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
                tags: ['спорт']
            },
            {
                id: '2',
                title: 'Из-за оттепели в Минской области запретили выходить на лед',
                summary: 'Миноблисполком принял распоряжение о запрете выхода на лед. В период оттепели реки и озера особенно опасны из-за неоднородного и нестабильного льда. Об этом сообщает Управление МЧС по Минской области.',
                createdAt: new Date('2017-02-27T23:10:00'),
                author: 'Иванов Иван',
                content: ' Специалисты напоминают, что подтаявший лед имеет оттенки серого, матово-белого или желтого цвета. Это самый ненадежный лед — он обрушивается без предупреждающего звука потрескивания.Опасным лед считается при толщине меньше 7 см. Самый тонкий обычно наблюдается в местах впадения ручьев в реки, местах изменения русла, у обрывистых берегов и в местах произрастания деревьев и кустарников в воде.',
                tags: ['погода']
            },
            {
                id: '3',
                title: '"Газпром" заявил о новой цене на газ для Беларуси',
                summary: 'Российский газ для Беларуси с 1 января 2017 года подорожал на 6,81%, до $ 141,1 за 1 тыс. куб. м, следует из письма заместителя председателя правления «Газпрома» Валерия Голубева министру энергетики Александру Новаку.',
                createdAt: new Date('2017-02-27T23:40:00'),
                author: 'Smirnova',
                content: 'Как следует из документа (копия есть у РБК, ее подлинность подтвердили чиновники Минэнерго России и Беларуси)газовая монополия определяет цену топлива по формуле, в которой учитываются: цена газа в Ямало-Ненецком автономном округе(на 1 января 2017 года составляла 2,395 тыс. российских руб. за 1 тыс. куб. м), стоимость транспортировки и хранения газа в 2016 году ($ 99,93 за 1 тыс. куб. м), курс доллара к рублю (1 января составлял 60,65 российского руб. за $ 1)и поправочный коэффициент, учитывающий изменение потребительских цен в США (1,7%, долларовая инфляция. — РБК). В итоге цена на газ достигает $ 141,11 за 1 тыс. куб. м, что на 6,81% выше уровня 2016 года ($ 132 за 1 тыс. куб. м)',
                tags: ['финансы']
            },
            {
                id: '4',
                title: ' Белый дом проверяет телефоны сотрудников в рамках борьбы с утечками',
                summary: 'Пресс-секретарь Белого дома Шон Спайсер пытается бороться с утечками информации из президентской администрации,повысив меры безопасности, в частности, выборочно проверяя мобильные телефоны сотрудников.Об этом в воскресенье, 26 февраля, пишет интернет-издание Politico.',
                createdAt: new Date('2017-02-27T23:10:00'),
                author: 'Smirnova',
                content: 'Пресс-секретарь Белого дома Шон Спайсер пытается бороться с утечками информации из президентской администрации,повысив меры безопасности, в частности, выборочно проверяя мобильные телефоны сотрудников.Об этом в воскресенье, 26 февраля, пишет интернет-издание Politico.',
                tags: ['политика', 'мировые новости']
            },
            {
                id: '5',
                title: 'Дальмайер выиграла преследование в Пхенчхане, Скардино и Домрачева - в топ-15',
                summary: 'Немка Лаура Дальмайер, не допустив ни одного промаха, уверенно выиграла гонку преследования на этапе Кубка мира по биатлону в южнокорейском Пхенчхане.',
                createdAt: new Date('2017-02-27T16:00:00'),
                author: 'Smirnova',
                content: 'На финише Дальмайер на минуту и 12 секунд опередила стартовавшую четвертой финку Кайсу Макарайнен (0+0+2+0). Третьей стала француженка Анаис Бескон (0+0+1+0), которая в начале гонки была восьмой.Надежда Скардино (0+0+0+0) поднялась с 22-го места на 11-е, Дарья Домрачева (1+0+0+1) - с 20-го на 13-е. Ирина Кривко допустила 2 (0+1+0+1) промаха и с 19-й позиции откатилась на 25-ю. Дарья Юркевич (0+0+0+0) с 57-го места поднялась на 46-е.В воскресенье женскую программу соревнований завершит эстафетная гонка.',
                tags: ['спорт']
            },
            {
                id: '6',
                title: 'Алина Талай принесла Беларуси вторую медаль на ЧЕ-2017 по легкой атлетике в помещении',
                summary: 'Белоруска Алина Талай завоевала серебро в беге на 60 м с барьерами на чемпионате Европы по легкой атлетике в помещении в Белграде.',
                createdAt: new Date('2017-01-27T18:00:00'),
                author: 'Smirnova',
                content: 'В финале судьи дважды останавливали решающий забег из-за фальстарта, а на третий раз арбитры подняли с колодок уже изготовившихся спортсменок еще до выстрела стартового пистолета.С четвертой попытки забег все же состоялся.',
                tags: ['спорт']
            },
            {
                id: '7',
                title: 'В каких районах Беларуси больше всего безработных',
                summary: 'В январе в Беларуси на 4,6 тысячи безработных стало больше. До этого число официально нетрудоустроенных сокращалось с мая прошлого года. FINANCE.TUT.BY посмотрел, как число безработных отличается по районам.',
                createdAt: new Date('2017-02-27T12:00:00'),
                author: 'Smirnova',
                content: 'Январским лидером по уровню безработицы оказался Кричевский район — 1,6% нетрудоустроенных к экономически активному населению. По сравнению с декабрем число нетрудоустроенных в этом районе увеличилось на 31,2%. Следом в рейтинге самых безработных районов расположились Лидский и Мостовский (по 1,5%).Молодечненский район, который в прошлом году несколько раз занимал первую строчку по уровню безработицы, в январе оказался на 4-м месте.По числу нетрудоустроенных в прошлом месяце лидировали Лидский (878 человек), Солигорский (869), Молодечненский (835), Оршанский (832) и Борисовский районы (832).',
                tags: ['финансы']
            },
            {
                id: '8',
                title: '"Скидка еще больше". Россия настойчиво манит белорусские нефтепродукты в свои порты',
                summary: '«Российские железные дороги» (РЖД) увеличили с 25% до 50% скидку на перевозки нефтепродуктов в цистернах со станций Барбаров и Новополоцк в направлении припортовых станций Северо-Запада РФ. Информация об этом опубликована на сайте РЖД.',
                createdAt: new Date('2017-02-27T19:00:00'),
                author: 'Smirnova',
                content: 'Вблизи станции Барбаров находится Мозырский нефтеперерабатывающий завод (у правительства Беларуси — 42,76% акций, у российской «Славнефти», подконтрольной «Роснефти» и «Газпром нефти» — 42,58%), вблизи станции Новополоцк — «Нафтан».Решение о 25%-ной скидке на перевозки бензина, дизельного топлива и мазута с двух белорусских станций в порты Северо-Запада РФ в период до 2019 г. «Российские железные дороги» приняли в октябре 2016 года. Правда, в декабре президент РЖД Олег Белозеров заявил, что компания готова увеличивать размер понижающего коэффициента. «У нас была скидка 25% по белорусскому направлению дана по переключению грузов в порты Российской Федерации, на северо-запад. Если потребуется, мы дадим дополнительные скидки для того, чтобы грузы ехали по железной дороге не в Прибалтику, а на северо-запад за счет того, что у нас есть такая экономика», — сказал Белозеров.',
                tags: ['финансы']
            },
            {
                id: '9',
                title: 'Россия, Украина, Туркменистан: куда чаще всего уезжали из Беларуси в 2016 году',
                summary: 'В 2016 году из Беларуси уехало в другие страны чуть более 13 000 человек. Это примерно на 3000 больше, чем в 2015-м, сообщает Белстат. Чаще всего люди уезжали в Россию, Украину, Туркменистан, Литву и Германию.',
                createdAt: new Date('2016-02-27T20:00:00'),
                author: 'Smirnova',
                content: 'Как и в 2015 году, больше всего белорусов переехало в Россию. В 2016-м это почти 5912 человек. На втором месте Украина — 1809 человек, на третьем Туркменистан — 803.Для сравнения: в Германию переселились 527 человек, в Израиль — 520, в США — 464.А вот желающих поселиться в Беларуси становится меньше. В прошлом году таких было около 21 тыс. человек. Примерно на 7000 меньше, чем в 2015-м.Каждый четвертый приехавший — мигрант из Украины. В 2016-м из этой страны-соседки к нам приехали 5492 человека, что почти в два раза меньше, чем в 2015-м.В основном же в Беларусь переезжали люди из России, Украины, Туркменистана, Китая и Казахстана.',
                tags: ['статистика']
            },
            {
                id: '10',
                title: 'Федерация футбола определилась с тренером сборной Беларуси. Пока временным',
                summary: 'Федерация футбола определилась с наставником сборной Беларуси. Итогом встречи председателя АБФФ Сергея Румаса и Игоря Криушенко стала договоренность о назначении 53-летнего отечественного специалиста на пост главного тренера национальной сборной страны в качестве исполняющего обязанности, сообщает официальный сайт АБФФ.',
                createdAt: new Date('2017-01-27T23:00:00'),
                author: 'Smirnova',
                content: 'Документально отношения будут оформлены в ближайшие дни.Одновременно Криушенко продолжит возглавлять и команду «Торпедо-БелАЗ» из Жодино. Как отмечает официальный сайт жодинского клуба, совмещение было условием, при котором Игорь Николаевич согласился на предложение возглавить национальную сборную.Как пояснил Криушенко «Прессболу», вернуться к теме совмещения постов решено позже — либо летом, либо в конце отборочного цикла.',
                tags: ['спорт']
            },
            {
                id: '11',
                title: 'Транспортного налога недостаточно. Минтранс ищет деньги на ремонт местных дорог',
                summary: 'Рабочая группа при Минтрансе определила, какие местные дороги в стране требуют ремонта — всего насчитали около 6 тысяч километров. Сейчас решается, из каких источников будут финансировать эти работы — средств транспортного налога для этого недостаточно. Об этом AUTO.TUT.BY рассказал первый заместитель министра транспорта и коммуникаций Беларуси Алексей Авраменко.',
                createdAt: new Date('2016-03-27T23:00:00'),
                author: 'Smirnova',
                content: 'Замминистра пояснил, что в понятие «местные дороги» не входят улицы населенных пунктов, за исключением тех, которые являются транзитными участками местных автодорог.— Рабочей группе представили результаты сезонных обследований местных дорог, которые проводятся с участием ГАИ, дорожных организаций, представителей технического надзора. На основании этих данных мы составили ранжированный список местных дорог, состояние которых требует текущего или капитального ремонта. Общая их протяженность — около 6 тысяч км, — рассказал Алексей Авраменко.Больше всего дорог, требующих ремонта, — в Минской области. Это связано не с тем, что в области самые плохие дороги, а потому, что территориально эта область больше других, к тому же здесь самая развитая дорожная сеть. Примерно сопоставимые цифры и по другим областям республики.',
                tags: ['финансы']
            },
            {
                id: '12',
                title: 'Каждый третий белорус ежемесячно располагает суммой меньше 300 рублей',
                summary: 'Каждый третий белорус — 33,9% — в октябре-декабре прошлого года ежемесячно располагал суммой до 300 рублей. При этом у 6% жителей нашей страны среднедушевые располагаемые ресурсы и вовсе были ниже бюджета прожиточного минимума — национальной черты бедности. Такие выводы следуют из статистики Белстата.',
                createdAt: new Date('2017-02-27T21:30:00'),
                author: 'Smirnova',
                content: 'В Беларуси на 1 января проживало 9 миллионов 504,7 тысячи человек. Получается, что за чертой бедности в октябре-декабре прошлого года находилось около 570 тысяч человек. Их ежемесячный доход не превышал размер бюджета прожиточного минимума. Для сравнения: в третьем квартале прошлого года за чертой бедности были 541,8 тысячи человек.Больше всего малообеспеченных проживает в Брестской области — 8,6% от всего населения региона. Следом идет Гомельская область — 8,1%. Ниже всего этот показатель в Минске — 1,7%.Больше четверти минчан — 27,4% — ежемесячно располагают суммой больше 600 рублей. К примеру, в Брестской области такой суммой в четвертом квартале могли похвастаться только 7,1% населения.',
                tags: ['финансы']
            },
            {
                id: '13',
                title: 'Первая половина марта будет по-апрельски теплой: ожидается до +15°С',
                summary: 'Беларусь распрощалась с зимой максимально теплой погодой. Как ожидают синоптики, первая декада марта будет соответствовать климатической норме апреля. Но обольщаться не стоит: это месяц переходный, поэтому температура еще может снижаться.',
                createdAt: new Date('2017-02-27T21:00:00'),
                author: 'Smirnova',
                content: 'В последний день зимы температура воздуха по стране достигла +9...+15 градусов. В Минске столбик термометра почти достиг отметки в 10 градусов — и обновил абсолютный максимум для 28 февраля.— Первая декада марта обещает быть очень теплой. Температурный фон будет выше климатической нормы на 7−8 градусов и соответствовать температуре начала апреля, — рассказала Светлана Рыбакова.Основная температура воздуха в первой декаде марта составит ночью -0...+7°С, отдельно при прояснениях до -3 градусов. Дневные температуры в пределах +5...12 градусов, в отдельных южных районах воздух может прогреться до +15°С',
                tags: ['погода']
            },
            {
                id: '14',
                title: 'Ученые нашли животное, которое спит меньше всех',
                summary: 'Дикие африканские слоны спят меньше других млекопитающих — всего два часа в сутки. Научная работа об этом опубликована в журнале PLoS One, кратко о ней рассказывает Gizmodo.',
                createdAt: new Date('2017-02-27T22:00:00'),
                author: 'Smirnova',
                content: 'Считается, что чем крупнее животное, тем меньше времени ему нужно на сон. В эту закономерность не вписывались слоны: судя по наблюдениям в зоопарках, они спят по 4 — 6 часов — аномально много для своих размеров. А вот сон диких слонов долгое время оставался загадкой для ученых.Чтобы изучить, сколько спят слоны на воле, ученые прикрепили ошейники-датчики к двум самкам-матриархам — главам семейств, живущих в Ботсване. На протяжении месяца исследователи собирали данные об активности животных, фиксируя их GPS-координаты и положение в пространстве.Выяснилось, что в среднем слонихи проводили во сне всего по два часа в сутки. Ни одна из самок не ночевала в одном месте дважды, спали они в основном стоя. Обычно они засыпали между 2 часами ночи и 6 утра.',
                tags: ['наука']
            },
            {
                id: '15',
                title: 'Найдены древнейшие следы жизни на Земле',
                summary: 'В слоях кварца в Канаде сохранились самые древние следы микроорганизмов из всех, что были когда-либо обнаружены — их возраст как минимум 3,77 миллиарда лет. Научная работа об этом опубликована в журнале Nature, кратко об этом сообщает Phys.org.',
                createdAt: new Date('2012-02-27T23:00:00'),
                author: 'Smirnova',
                content: 'Открытие сделали исследователи из Университетского колледжа в Лондоне. Они изучили зеленокаменный пояс Нуввуагиттук на севере канадской провинции Квебек. Возраст камней в этом регионе составляет от 3,77 до 4,28 миллиарда лет, раньше эта местность была дном океана.Ученые нарезали породы тончайшими слоями и изучили под микроскопом. В них обнаружились крошечные структуры, по форме похожие на трубки и нити. Анализ показал, что они были покрыты минералом железа под названием гематит.',
                tags: ['наука']
            },
            {
                id: '16',
                title: '"Белтелеком" повысил тарифы: все подробности',
                summary: 'С 1 марта подорожали услуги оператора связи «Белтелеком»: выросли регулярные платежи, увеличилась плата за услуги добровольной блокировки и родительского контроля.',
                createdAt: new Date('2010-02-27T23:00:00'),
                author: 'Smirnova',
                content: 'Средний размер повышения стоимости составил 9% к уровню тарифов прошлого года. Подорожание затронуло почти все актуальные и архивные предложения интернет-услуг byfly. Не изменилась плата на таких тарифах как «СуперДомосед», «Домосед Ультра» и «Рекорд 100».',
                tags: ['финансы']
            },
            {
                id: '17',
                title: 'Определились три полуфиналиста чемпионата Беларуси по хоккею',
                summary: 'Определились три полуфиналиста чемпионата Беларуси по хоккею. Путевки во второй раунд Кубка президента оформили минская «Юность», гродненский «Неман» и «Гомель». Причем для выявления сильнейшего в этих парах потребовалось минимальное число поединков. И лишь в паре «Шахтер» — «Динамо-Молодечно» борьба продолжается.',
                createdAt: new Date('2013-02-27T23:00:00'),
                author: 'Smirnova',
                content: '«Динамо-Молодечно» — «Шахтер-Солигорск» — 2:3 (0:0, 1:2, 1:1)2 марта. Солигорск. Ледовый дворец. 1150 зрителей. Солигорская дружина, начавшая серию с домашнего поражения, одержала вот уже три победы кряду, и уже в следующем поединке на родном льду может оформить выход в полуфинал.Впрочем, все четыре матча в этой напряженной серии завершились с разницей в одну шайбу.Остальные серии завершились без сюрпризов.',
                tags: ['спорт']
            },
            {
                id: '18',
                title: 'БАТЭ сыграл вничью с лидером 2-го дивизиона чемпионата Украины',
                summary: 'Футболисты БАТЭ ничьей с мариупольским «Ильичевцем» завершили 2 марта спарринговую программу второго сбора в Турции, сообщает официальный сайт 13-кратных чемпионов Беларуси.',
                createdAt: new Date('2014-02-27T23:00:00'),
                author: 'Smirnova',
                content: 'В поединке с «Ильичевцем», который после 20 туров с отрывом в 5 очков лидирует во втором по рангу дивизионе чемпионата Украины, штаб БАТЭ предоставил отдых многим лидерам команды.Резервисты в целом смотрелись уверенно. А 22-летний новобранец БАТЭ полузащитник Владислав Жук даже отметился первым голом в составе борисовчан, открыв счет на 12-й минуте.',
                tags: ['спорт']
            },
            {
                id: '19',
                title: 'Утвержден новый главный тренер молодежной сборной Беларуси по футболу',
                summary: 'Чемпион СССР 1982 года в составе минского «Динамо» Людас Румбутис утвержден главным тренером молодежной (U21) сборной Беларуси по футболу, сообщает официальный сайт АБФФ',
                createdAt: new Date('2015-02-27T23:00:00'),
                author: 'Smirnova',
                content: 'На этом посту 61-летний специалист сменил Игоря Ковалевича, который сейчас возглавляет гродненский «Неман».28 февраля на заседании исполкома АБФФ Людас Румбутис рассказал о своем видении работы с командой и получил единогласную поддержку.В число кандидатов на этот пост входили также Алексей Меркулов, Владимир Журавель, Александр Седнев, Игорь Ковалевич.',
                tags: ['спорт']
            },
            {
                id: '20',
                title: 'Два гонщика "Минска" стали призерами Кубка мира',
                summary: 'Гонщики трековой команды велоклуба «Минск» Роман Романов и Татьяна Шаракова вошли в тройку призеров общего зачета Кубка мира по велоспорту на треке в скретче и омниуме.',
                createdAt: new Date('2017-02-27T23:00:00'),
                author: 'Smirnova',
                content: 'На завершившемся в Лос-Анджелесе последнем этапе Кубка мира Роман Романов вышел на старт в скретче. И хотя один из фаворитов гонки выступил не слишком удачно — 17-е место, в общем зачете представитель «Минска» расположился на высокой третьей позиции.А победа на этапе и в итоговом зачете в скретче досталась другому белорусу — Евгению Корольку, выступавшему за национальную команду.Татьяна Шаракова обеспечила себе место в топ-3 итогового зачета Кубка мира в омниуме еще на предыдущем этапе в Кали. В Лос-Анджелесе лидер трековой команды «Минска» выступили в индивидуальной гонке преследования. До последнего квалификационного заезда Шаракова сохраняла шансы пробиться в финал и побороться за медаль, однако в итоге стала лишь пятой. На пятой позиции белоруска расположилась и в общем зачете Кубка мира в индивидуальном преследовании.',
                tags: ['спорт']
            },
            {
                id: '21',
                title: 'Легендарная гимнастка Ольга Корбут продала олимпийские медали за 230 тысяч долларов',
                summary: 'Как уже сообщалось, гимнастка Ольга Корбут выставила на аукцион пять медалей, завоеванных ею на Олимпийских играх 1972 и 1976 года. За их продажу она выручила 230 тысяч долларов.',
                createdAt: new Date('2016-02-27T23:00:00'),
                author: 'Smirnova',
                content: 'Командная золотая медаль ОИ-1972 в Мюнхене продана за 66 тысяч долларов, золото тех же Игр в вольных упражнениях — за 52,8 тысячи долларов, серебро в упражнении на брусьях — за 24,6 тысячи. Командное золото ОИ-1976 в Монреале обошлось покупателю в 57,6 тысячи долларов, а серебро за упражнения на бревне — в 24,6 тысячи. Корбут получит 183,3 тысячи долларов с учетом премии аукционного дома.Помимо медалей, были проданы гимнастический купальник, в котором Корбут выступала в Лондоне в 1973 году (3 тысячи долларов), и ее автограф на обложке журнала Sports Illustrated с ее изображением (49 долларов).Невыкупленными остаются 26 лотов спортсменки.',
                tags: ['спорт']
            }
        ];
    }
    var tags;
    //if(localStorage.getItem('tag') != null) {
       // tags = JSON.parse(localStorage.getItem('tag')) || [];
    //}
   // else{
        tags = ['политика', 'финансы', 'спорт', 'наука', 'погода', 'происшествия', 'статистика', 'культура', 'мировые новости'];
    //}




    function validateArticle(article) {
        if (typeof article.title !== 'string' || article.title.length <= 0 || article.title.length > 100){
            alert("Ошибка!");
            return false;
        }

        if (typeof article.summary !== 'string' || article.summary.length <= 0 || article.summary.length > 200)
        {
            alert("Ошибка!");
            return false;
        }

        if (article.id === undefined || article.id.length <= 0){
            alert("Ошибка!");
            return false;
        }

        if ((article.createdAt instanceof Date) === false){
            alert("Ошибка!");
            return false;
        }

        if (typeof article.author !== 'string' || article.author.length <= 0){
            alert("Ошибка!");
            return false;
        }

        if (typeof article.content !== 'string' || article.content.length <= 0){
            alert("Ошибка!");
            return false;
        }

        if (article.tags.length <= 0){
            alert("Ошибка!");
            return false;
        }

        /*for (var i = 0; i < article.tags.length; i++) {
            var count = 0;
            for (var j = 0; j < tags.length; j++) {
                if (tags[j] === article.tags[i])
                    count++;
            }
            if (count === 0)
                return false;
        }*/
        return true;
    }

    function getArticle(id) {
        if (id === undefined)
            return undefined;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id)
                return articles[i];
        }
        return undefined;
    }
    function addTagDOM(tag) {
        var tagList = document.querySelector('#tags');
        var tagOption;
        articleModel.addTag(tag);
        tagOption = document.createElement('option');
        tagOption.innerHTML = tag;
        tagList.appendChild(tagOption);
    }
    function addArticle(article) {
        if (validateArticle(article) === true) {
            articles.push(article);
            addTagDOM(article.tags);
            return true;
        }
        return false;
    }

    function editArticle(id, article) {
        var old = getArticle(id);
        if (old === undefined) {
            return false;
        }
        else {
            article.id = old.id;
            article.author = old.author;
            article.createdAt = old.createdAt;
        }
        if (validateArticle(article)) {
            old.title = article.title;
            old.summary = article.summary;
            old.content = article.content;
            old.tags = article.tags;
            return true;
        }
        return false;
    }

    function removeArticle(id) {
        var del;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id)
                del = i;
        }
        if (del === undefined)
            return false;
        articles.splice(del, 1);
        return true;
    }

    function index(tag) {
        for (var i = 0; i < tags.length; i++) {
            if (tags[i] === tag)
                return i;
        }
        return -1;
    }

    function addTag(tag) {
        if (index(tag) === -1) {
            tags.push(tag);
            return true;
        }
        return false;
    }

    function removeTag(tag) {
        var x = index(tag);
        if (x !== -1) {
            tags.splice(x, 1);
            return true;
        }
        return false;
    }

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        return filterArticles(articles, filterConfig).slice(skip, skip + top);
    }

    function getArticlesCount(filterConfig) {
        if(filterArticles(articles, filterConfig).length === 0){
            alert("Ничего не найдено:(");
        }
        return filterArticles(articles, filterConfig).length;
    }

    function filterArticles(articles, filterConfig) {
        if (filterConfig) {
            if (filterConfig.author) {
                articles = articles.filter(function (article) {
                    return filterConfig.author === article.author;
                })
            }
            if (filterConfig.dateFrom) {
                articles = articles.filter(function (item) {
                    var _date = new Date(filterConfig.dateFrom)
                    return item.createdAt >= _date;
                })
            }
            if (filterConfig.dateTo) {
                articles = articles.filter(function (element) {
                    var _date = new Date(filterConfig.dateTo)
                    return element.createdAt <= _date;
                })
            }
            if (filterConfig.tags) {
                articles = articles.filter(function (item) {
                    //for (var i = 0; i < filterConfig.tags.length; i++) {
                    var _tags = item.tags;
                    if (_tags.indexOf(filterConfig.tags) > -1) {
                        return item;
                    }
                    //}
                })
            }
        }
        return articles.sort(function (firstItem, secondItem) {
            return secondItem.createdAt - firstItem.createdAt;
        });

    }


    return {
        getArticles: getArticles,
        getArticle: getArticle,
        validateArticle: validateArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        addTag: addTag,
        removeTag: removeTag,
        getArticlesCount: getArticlesCount,
        articles: articles
    };
}())

var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;
    var USER;
    var BUTTON;
    var BUTTONS_EDIT;
    var TAGS;
    var TAGS_LIST;
    var user = undefined;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-news');
        ARTICLE_LIST_NODE = document.querySelector('.article-list');
        USER = document.getElementById('user-name');
        TAGS = document.querySelector('#template-tag');
        TAGS_LIST = document.querySelector('.option');
        BUTTONS_EDIT = document.getElementById('buttons');
        var BUTTON = document.getElementById('sign-in');
        if (user === undefined) {
            USER.firstElementChild.textContent = 'Гость';
            BUTTON.textContent = 'Войти';
        }

    }

    function insertArticlesInDOM(articles) {
        var articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        ARTICLE_LIST_NODE.innerHTML = '';
    }


    function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        var template = ARTICLE_TEMPLATE;

        template.content.querySelector('.news-table').dataset.id = article.id;
        template.content.querySelector('.news-title').textContent = article.title;
        template.content.querySelector('.news-summary').textContent = article.summary;
        template.content.querySelector('.news-author').textContent = article.author;
        template.content.querySelector('.news-date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.news-tags').textContent = article.tags;

        return template.content.querySelector('.news-table').cloneNode(true);
    }


    function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if(hours < 10){
            hours = "0" + hours;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(day < 10){
            day = "0" + day;
        }
        if(month < 10){
            month = "0" + month;
        }
        return day + '.' + month + '.' + date.getFullYear() + ' ' +
            hours + ':' + minutes;
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());

var pagination = (function () {
    var ITEMS_PER_PAGE = 10;
    var total;
    var currentPage;
    var showMoreButton;
    var showMoreCallback;

    function init(_total, _showMoreCallback) {
        currentPage = 1;
        total = _total;
        showMoreCallback = _showMoreCallback;
        showMoreButton = document.getElementById('button-show');
        showMoreButton.addEventListener('click', handleShowMoreClick);

        showOrHideMoreButton();

        return getParams();
    }

    function handleShowMoreClick() {
        var paginationParams = nextPage();
        showMoreCallback(paginationParams.skip, paginationParams.top);
    }

    function getTotalPages() {
        return Math.ceil(total / ITEMS_PER_PAGE);
    }

    function nextPage() {
        currentPage = currentPage + 1;
        showOrHideMoreButton();

        return getParams();
    }

    function getParams() {
        return {
            top: ITEMS_PER_PAGE,
            skip: (currentPage - 1) * ITEMS_PER_PAGE
        };
    }

    function showOrHideMoreButton() {
        showMoreButton.hidden = getTotalPages() <= currentPage;
    }

    return {
        init: init
    }

}());

var filter = (function () {
    var submitButton;
    var filterChangedCallback;

    function init(_filterChangedCallback) {
        submitButton = document.getElementById('search');
        submitButton.addEventListener('click', handleSubmitClick);
        filterChangedCallback = _filterChangedCallback;

        return getFilter();
    }

    function getFilter() {
        var authorSelect = document.getElementById('author');
        var dateFromSelect = document.getElementById('begin-date');
        var dateToSelect = document.getElementById('end-date');
        var tagsSelect = document.getElementsByClassName('option');
        var _author;
        var _dateFrom;
        var _dateTo;
        var _tags;
        if (authorSelect.value) {
            _author = authorSelect.value;
        }
        if (dateFromSelect.value) {
            _dateFrom = dateFromSelect.value;
        }
        if (dateToSelect.value) {
            _dateTo = dateToSelect.value;
        }
        if (tagsSelect.value) {
            _tags = tagsSelect.value;
        }

        return {
            author: _author,
            dateFrom: _dateFrom,
            dateTo: _dateTo,
            tags: _tags
        }
    }

    function handleSubmitClick() {
        return filterChangedCallback(getFilter());
    }

    return {
        init: init,
        getFilterConfig: getFilter
    };

}());

var log = (function () {

    var enter;
    var userName;
    var password = document.getElementById('password');
    userName = document.getElementById('log');
    var user = document.getElementById('user-name');
    var add = document.querySelector('.news');
    var edit = document.getElementById('edit');
    var remove = document.getElementById('delete');
    var button = document.getElementById('exit');
    function init() {
        enter = document.getElementById('sign-in');
        enter.addEventListener('click', handleSubmitClick);
    }

    function handleSubmitClick() {
        if(userName.value.length !== 0 && password.value.length!==0){
            user.firstElementChild.textContent = userName.value;

        password.style.display = 'none';
        userName.style.display = 'none';
        button.style.display = 'inline';
        add.style.display = 'inline';
        enter.style.display = 'none';

        }
    }


    return{
        init: init
    }
}());
var exit = (function () {
    var enter;
    var userName;
    var password = document.getElementById('password');
    userName = document.getElementById('log');
    var user = document.getElementById('user-name');
    var add = document.querySelector('.news');
    var edit = document.querySelector('.edit');
    var remove = document.querySelector('.delete');
    var button = document.getElementById('sign-in');
    function init() {
        enter = document.getElementById('exit');
        enter.addEventListener('click', handleSubmit);

    }
    function handleSubmit() {
        user.firstElementChild.textContent = 'Гость';
        password.style.display = 'inline';
        userName.style.display = 'inline';
        button.style.display = 'inline';
        enter.style.display = 'none';
        add.style.display = 'none';
        userName.value = '';
        password.value = '';
    }

    return{
        init: init
    }
}());

var addNews = (function () {
    function init() {
        var add = document.querySelector('.news');
        add.addEventListener('click', handleSubmit);

    }
    function handleSubmit() {
        articleRenderer.removeArticlesFromDom();
        var form = document.getElementById('add-news');
        form.style.display = 'inline';
        var show = document.getElementById('button-show');
        show.style.display = 'none';
    }

    return{
        init: init
    }
}());
var addNewsForm = (function () {
    var title = document.getElementById('title');
    var summary = document.getElementById('summary');
    var text = document.getElementById('text');
    var tag = document.getElementById('tag');
    var user = document.getElementById('user-name');
    var filterConfig = {author: '', dateFrom: '', dateTo: '', tags: ''};
    var article = {
        id: '', title: '', summary: '', tags: [''], author: '', createdAt: '', content: ''
    };
    function init() {
        var add = document.querySelector('#add-news-form');
        add.addEventListener('click', handleSubmit);

    }
    function handleSubmit() {
       article.id = articleModel.articles.length + 1;
       article.title = title.value;
       article.summary = summary.value;
       article.tags = [tag.value];
       article.author = user.firstElementChild.innerHTML;
       article.createdAt = new Date();
       article.content = text.value;
       articleModel.addArticle(article);
        var form = document.getElementById('add-news');
        form.style.display = 'none';
        var show = document.getElementById('button-show');
        show.style.display = 'inline';
        title.value = '';
        summary.value = '';
        tag.value = '';
        text.value = '';
        showArticles(filterConfig);
        console.log(articleModel.articles);
    }
    function showArticles(filterConfig) {
        articleRenderer.removeArticlesFromDom();
        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }
    function renderArticles(skip, top, filterConfig) {
        var articles = articleModel.getArticles(skip, top, filterConfig);
        articleRenderer.insertArticlesInDOM(articles);
    }


    return{
        init: init
    }
}());
var goMain = (function () {
    var filterConfig = {author: '', dateFrom: '', dateTo: '', tags: ''};
    function init() {
        var del = document.getElementById('portal').firstElementChild;
        del.addEventListener('click', handleSubmit);
    }
    function handleSubmit() {
        showArticles(filterConfig);
    }
    function showArticles(filterConfig) {
        articleRenderer.removeArticlesFromDom();
        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }
    function renderArticles(skip, top, filterConfig) {
        var articles = articleModel.getArticles(skip, top, filterConfig);
        articleRenderer.insertArticlesInDOM(articles);
    }

    return{
        init: init
    }
}());
var articleFullRenderer = (function () {

    var articleListNode;

    var article = document.getElementById('article_full');
    var title = document.getElementById('news-title1');
    var content = document.getElementById('news-text');
    var tag = document.getElementById('news-tags1');
    var author = document.getElementById('news-author1');
    var date = document.getElementById('news-date1');
    var button_edit = document.getElementById('my-edit');
    function init() {
        if (document.getElementById('user-name').firstElementChild.innerHTML === "Гость") {
            document.querySelector('#edit-btn').style.display = 'none';
            document.querySelector('#delete-btn').style.display = 'none';
        } else {
            document.querySelector('#edit-btn').style.display = 'inline';
            document.querySelector('#delete-btn').style.display = 'inline';
        }
        document.getElementById('button-show').style.display = 'none';
    }

    function insertArticlesInDOM(id) {
        var article_show = articleModel.getArticle(id);
        button_edit.dataset.id = article_show.id;
        article.dataset.id = article_show.id;
       title.innerHTML = article_show.title;
       content.textContent = article_show.content;
       date.textContent = formatDate(article_show.createdAt);
       author.textContent = article_show.author;
       tag.textContent= article_show.tags;
       article.style.display = 'inline';
    }

    function removeArticlesFromDom() {
        articleListNode.innerHTML = '';
    }


    function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if(hours < 10){
            hours = "0" + hours;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(day < 10){
            day = "0" + day;
        }
        if(month < 10){
            month = "0" + month;
        }
        return day + '.' + month + '.' + date.getFullYear() + ' ' +
            hours + ':' + minutes;
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());
var remove = (function () {
    var filterConfig = {author: '', dateFrom: '', dateTo: '', tags: ''};
    function init() {
        var del = document.querySelector('#delete-btn');
        del.addEventListener('click', handleSubmit);
    }

    function handleSubmit(event) {
        var answer = confirm("Вы действительно хотите удалить новость?");
        if(answer){
            articleModel.removeArticle(event.target.parentNode.dataset.id);
            showArticles(filterConfig);
        }
        else{
            showArticles(filterConfig);
        }
        document.getElementById('article_full').style.display = 'none';
        document.getElementById('button-show').style.display = 'inline';
    }
    function showArticles(filterConfig) {
        articleRenderer.removeArticlesFromDom();
        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }
    function renderArticles(skip, top, filterConfig) {
        var articles = articleModel.getArticles(skip, top, filterConfig);
        articleRenderer.insertArticlesInDOM(articles);
    }


    return{
        init: init
    }
}());

var edit = (function () {
    var title = document.getElementById('title');
    var summary = document.getElementById('summary');
    var text = document.getElementById('text');
    var tag = document.getElementById('tag');
    var filterConfig = {author: '', dateFrom: '', dateTo: '', tags: ''};
    function init() {
        var edit = document.querySelector('#edit-btn');
        edit.addEventListener('click', handleSubmit);
        var my_edit = document.querySelector('#my-edit');
        my_edit.addEventListener('click', handleSubmitEdit);
    }
    function handleSubmit(event) {
        articleRenderer.removeArticlesFromDom();
        var article = articleModel.getArticle(event.target.parentNode.dataset.id);
        document.getElementById('add-news').style.display = 'inline';
        document.getElementById('my-edit').style.display = 'inline';
        document.getElementById('article_full').style.display = 'none';
        document.getElementById('button-show').style.display = 'none';

        document.getElementById('add-news-form').style.display = 'none';
    }
    function handleSubmitEdit() {
        var id = document.getElementById('article_full').dataset.id;
        var article = articleModel.getArticle(id);
        console.log(id);
        if(title.value !== ''){
            article.title = title.value;
        }
        if(summary.value !== ''){
            article.summary = summary.value;
        }
        if(tag.value !== ''){
            article.tags = [tag.value];
        }

        if(text.value !== ''){
            article.content = text.value;
        }

        articleModel.editArticle(event.target.parentNode.dataset.id, article);
        title.value = '';
        summary.value = '';
        tag.value = '';
        text.value = '';
        showArticles(filterConfig);
        document.getElementById('add-news').style.display = 'none';
        document.getElementById('article_full').style.display = 'none';
        document.getElementById('button-show').style.display = 'inline';

    }

    function showArticles(filterConfig) {
        articleRenderer.removeArticlesFromDom();
        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }
    function renderArticles(skip, top, filterConfig) {
        var articles = articleModel.getArticles(skip, top, filterConfig);
        articleRenderer.insertArticlesInDOM(articles);
    }
    return{
        init: init
    }
}());

var list_news = (function () {
    var filterConfig = {author: '', dateFrom: '', dateTo: '', tags: ''};
    function init() {
        var del = document.querySelector('#come-back');
        del.addEventListener('click', handleSubmit);
    }
    function handleSubmit() {
        var article = document.getElementById('article_full');
        article.style.display = 'none';
        document.getElementById('button-show').style.display = 'inline';
        showArticles(filterConfig);

    }
    function showArticles(filterConfig) {
        articleRenderer.removeArticlesFromDom();
        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }
    function renderArticles(skip, top, filterConfig) {
        var articles = articleModel.getArticles(skip, top, filterConfig);
        articleRenderer.insertArticlesInDOM(articles);
    }
    return{
        init: init
    }
}());

document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
    articleRenderer.init();
    addNews.init();
    log.init();
    exit.init();
    addNewsForm.init();
    remove.init();
    list_news.init();
    edit.init();
    goMain.init();
    var filterConfig = filter.init(renderArticlesWithFilterConfig);

    renderArticlesWithFilterConfig(filterConfig);

    function renderArticlesWithFilterConfig(filterConfig) {
        articleRenderer.removeArticlesFromDom();

        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });

        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }

    function renderArticles(skip, top, filterConfig) {
        var articles = articleModel.getArticles(skip, top, filterConfig);
        articleRenderer.insertArticlesInDOM(articles);

    }

}
function handleViewAllClick(event) {
    articleRenderer.removeArticlesFromDom();
    articleFullRenderer.init();
    articleFullRenderer.insertArticlesInDOM(event.target.parentNode.dataset.id)
}

function addArticle(article) {
    articleModel.addArticle(article);
    addTag(article.tags);
    renderArticles();
}
function removeArticle(id) {
    articleModel.removeArticle(id);
    renderArticles();
}
function editArticle(id, article) {
    articleModel.editArticle(id, article);
    renderArticles();
}
function addTag(tag) {
    var tagList = document.querySelector('#tags');
    var tagOption;
    articleModel.addTag(tag);
    tagOption = document.createElement('option');
    tagOption.innerHTML = tag;
    tagList.appendChild(tagOption);
}
function removeTag(tag) {
    var remove = document.querySelector('#tags');
    var del = document.getElementsByTagName('option')
    for (var i = 0; i < del.length; i++) {
        if (del[i].textContent === tag) {
            remove.removeChild(del[i]);
        }
    }
}
