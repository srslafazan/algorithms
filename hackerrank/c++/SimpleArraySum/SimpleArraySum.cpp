#include <vector>
#include <iostream>
using namespace std;

int main(){
	int n;
	int sum;
	int arr_i;
			    
	cin >> n;
	vector<int> arr(n);
	for(arr_i = 0; arr_i < n; arr_i++){
		cin >> arr[arr_i];
	}

	sum = arr[0];
	for(arr_i = 1; arr_i < n; arr_i++){
		sum += arr[arr_i];
	}

	cout << sum;

	return 0;
}

