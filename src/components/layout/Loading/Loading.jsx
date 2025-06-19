const Loading = () => {
  return (
    <article className="h-screen flex items-center justify-center bg-bg-clr">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-22 h-22 border-8 border-main-clr border-t-transparent rounded-full animate-spin"></div>
        <h2 className="text-xl font-semibold text-main-clr">Loading...</h2>
      </div>
    </article>
  );
};

export default Loading;
