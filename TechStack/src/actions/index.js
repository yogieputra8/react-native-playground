export const pilihLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};