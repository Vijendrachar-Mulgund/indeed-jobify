import { PageLoaderWrapper } from "./../../styles/modules/PageLoader/PageLoaderWrapper";

const PageLoader = () => {
  return (
    <PageLoaderWrapper>
      <div className="loader-container">
        <p>Loading...</p>
      </div>
    </PageLoaderWrapper>
  );
};

export default PageLoader;
