import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const BookList = () => {
  const { siteConfig, siteMetadata, globalData } = useDocusaurusContext();

  console.log(siteConfig, siteMetadata, globalData);

  const List = globalData['docusaurus-plugin-content-docs']['BookNote']['versions'][0]['docs'].filter(item=>item.id.includes('大明王朝1566'))
  console.log(List);
  

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
      <Link to={List[0].path}>测试1</Link>
    </Layout>
  );
};
export default BookList;
