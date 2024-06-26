export const tableStyle = {
  '& td': { py: '0.5rem' },
  '& input': { fontSize: '0.8rem' },
  '& div': { fontSize: '0.8rem' },
};
const thStyle = { bgcolor: 'primary.main', color: '#FFF', borderRight: '#FFF 1px solid' };
export const thRowStyle = { bgcolor: 'primary.main', '& th': thStyle, '& th:last-child': { borderRight: 'none' } };
export const clickableTrStyle = { cursor: 'pointer', '& td': { py: '0.5rem' } };
