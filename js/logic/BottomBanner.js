function BottomBanner() {
  const g = s();
  return e(
    'div',
    {
      style: {
        ...position1,
        height: '10%',
        backdropFilter: 'blur(5px)',
        backgroundImage: 'var(--gradient-4)',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      className: 'panel-1 panel-2',
    },
    e(Button1, {className: 'fa-home', onClick: () => {
      g.setIsPaginDocument(1);
      g.setIsDisplay('Main');
    }}),
    e(Button1, {className: 'fa-sliders-h', noNewFav: true, onClick: () => {
      g.setIsPaginDocument(1);
      g.setIsDisplay('Filter');
    }}),
    e(Button8, {className: 'fa-heart', onClick: () => {
      g.setIsPaginDocument(1);
      g.setIsDisplay('Favourite');
    }}),
    e(Button1, {className: 'fa-laptop-code', onClick: () => g.setIsDisplay('MyProjects')}),
    e(Button1, {className: 'fa-user-tie', onClick: () => g.setIsDisplay('AboutMe')}),
  );
}