import test from 'ava';
import minHostBits from './index.js';

test('Test positive hosts', t => {
	t.is(minHostBits(500), 9, 'Small check for host bits');
	t.is(minHostBits(1000000), 20, 'Large check for host bits');
});

test('Test for 0 hosts', t => {
	t.is(minHostBits(0), 0, '0 for 0 number of host');
});

test('Test for negative', t => {
	t.is(minHostBits(-200), 0, '0 for negative number of host');
});
