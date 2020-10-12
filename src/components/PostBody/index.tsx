import styles from './post-body.module.css';

interface Props {
  content: string;
}
const PostBody: React.FC<Props> = ({ content }) => (
  <div className="max-w-2xl mx-auto">
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default PostBody;
