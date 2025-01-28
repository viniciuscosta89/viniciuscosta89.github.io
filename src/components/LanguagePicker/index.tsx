import {
	languagePickerStyle,
	languagePickerFlag,
} from './LanguagePicker.styles';
import Icons from '@components/Icons/';

function LanguagePicker() {
	return (
		<ul className={languagePickerStyle}>
			<li>
				<a
					className={languagePickerFlag}
					href="/"
					title="Change to english version"
				>
					<Icons.USAFlag />
				</a>
			</li>
			<li>
				<a
					className={languagePickerFlag}
					href="/pt-BR"
					title="Mude para a versão em português"
				>
					<Icons.BrazilFlag />
				</a>
			</li>
		</ul>
	);
}

export default LanguagePicker;
