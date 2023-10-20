import {
  searchModal,
  searchModalInner,
  searchModalItem,
  searchModalList,
  searchModalTitle,
} from './searchModal.css'

export const SearchModal = ({ onBlur }: { onBlur: () => void }) => {
  const keywords = ['２外', '単位', '落とす', 'やばい']
  return (
    <div className={searchModal} onClick={() => onBlur()}>
      <div className={searchModalInner} onClick={(event) => event.stopPropagation()}>
        <h2 className={searchModalTitle}>よく検索されるキーワード</h2>
        <ul className={searchModalList}>
          {keywords.map((keyword) => (
            <li className={searchModalItem} key={keyword} onClick={() => console.log(keyword)}>
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
