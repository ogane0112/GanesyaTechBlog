export default function NoResults() {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">検索結果がありません</h2>
        <p className="text-gray-600">
          お探しの記事が見つかりませんでした。
          <br />
          別のキーワードで検索してみてください。
        </p>
      </div>
    );
  }