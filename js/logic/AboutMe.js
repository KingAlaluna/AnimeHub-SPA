function AboutMe() {
  return e(
    'div',
    {
      style: {
        backgroundImage: 'var(--gradient-1)',
        height: 'max-content',
        minHeight: '100%',
        overflow: 'auto',
      },
    },
    e(Text1, {text: 'Про цей проєкт та себе:'}),
    e(Markdown1, {text: aboutMeTexts}),
    e(AllLawProtected1),
  );
}

