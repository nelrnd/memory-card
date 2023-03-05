import GitHubIcon from './assets/github-icon.svg';

export default function Footer() {
  return (
    <footer>
      <p>
        <img src={GitHubIcon} alt='GitHub icon' />
        Created by{' '}
        <a href='https://github.com/nelrnd' target='_blank' rel='noreferrer'>
          Nel
        </a>
      </p>
    </footer>
  );
}
