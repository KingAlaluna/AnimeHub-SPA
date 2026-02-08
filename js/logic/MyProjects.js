function MyProjects() {
  return e(
    'div',
    {
      style: {
        backgroundImage: 'var(--gradient-1)',
        height: 'max-content',
        minHeight: '100%',
      },
    },
    e(Text1, {text: 'Моі проекти:'}),
    e(Markdown1, {text: myProjectsTexts}),
    e(AllLawProtected1),
  );
}