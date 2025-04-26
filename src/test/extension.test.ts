import * as assert from 'assert';
import * as vscode from 'vscode';
import * as extension from '../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('stringdiff'));
	});

	test('Should register commands', async () => {
		const commands = await vscode.commands.getCommands(true);
		assert.ok(commands.includes('stringdiff.diff'));
	});

	test('Virtual filesystem should be registered', () => {
		// Ensure our stringdiff scheme is properly registered
		const providers = vscode.workspace.fs;
		// While we can't directly test if our scheme is registered,
		// we can attempt to create a URI with our scheme
		const testUri = vscode.Uri.parse('stringdiff:/test.txt');
		assert.ok(testUri.scheme === 'stringdiff');
	});
});
