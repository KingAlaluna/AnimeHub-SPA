function Main() {
  return e(
    'div',
    {
      style: {
        backgroundImage: 'var(--gradient-1)',
        height: 'max-content',
        minHeight: '100%',
      },
    },
    e(Panel1, {text: 'Топ аніме:', animeUrl: 'top/anime'}),
    e(Panel1, {text: 'Новинки:', animeUrl: 'seasons/now'}),
    e(Panel1, {text: 'Анонси:', animeUrl: 'seasons/upcoming'}),
    e(PanelRecomeng1, {text: 'Рекомендуємо:'}),
    e(Pagination1),
    e(AllLawProtected1),
  );
}



