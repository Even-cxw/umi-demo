import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className="h-dvh">
      <Outlet />
    </div>
  );
}
