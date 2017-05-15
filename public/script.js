
var articleModel = (function () {
    var articles;


    var tags;
    tags = ['политика', 'финансы', 'спорт', 'наука', 'погода', 'происшествия', 'статистика', 'культура', 'мировые новости'];


    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/articles', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    var articles = JSON.parse(xhr.responseText, function(key, value) {
            if (key === 'createdAt') return new Date(value);

    return value;
});
    xhr.open('GET', '/tags', false);
    xhr.send();

    var tags = JSON.parse(xhr.responseText);
    var arraytags=[];
    for (var i = 0; i<tags.length; i++) {
        arraytags.push(tags[i].name);
    }
    function xmlRequest(req, url, params) {
        var xhr = new XMLHttpRequest();
        xhr.open(req, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        if (req === 'DELETE')
            xhr.send();
        else
            xhr.send(JSON.stringify(params));

    }

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
            xmlRequest('POST', '/articles', article);
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
            xmlRequest('PUT', '/articles', article);
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
        xmlRequest('DELETE', '/article/'+id+'');
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
            var addNewTag = {name:tag};
            xmlRequest('POST', '/tags', addNewTag);
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
