#include <bits/stdc++.h>
#define all(c) (c).begin(), (c).end()
#define present(c, x) ((c).find(x) != (c).end())
#define cpresent(c, x) (find(all(c),x) != (c).end())
#define fi first
#define se second
#define imie(...) " [" << #__VA_ARGS__ ": " << (__VA_ARGS__) << "] "
#define parr(arr) for(int num : (arr)) cout << num << ' '; cout << '\n';
using namespace std;


int main(){
    ios::sync_with_stdio(false); cin.tie(NULL);
        int n; cin >> n;
        long long int x; cin >> x;
        int mid = n/2;
        vector<int> arr(n);
        for(int i=0;i<n;++i) cin >> arr[i];
        vector<long long int> left, right;
        for(int i=0;i<(1<<mid);++i){
            long long int sum = 0;
            for(int j=0;j<32;++j){
                if(i & (1<<j)){
                    sum += arr[j];
                }
            }
            left.push_back(sum);
        }
        int rem = n-mid;
        for(int i=0;i<(1<<rem);++i){
            long long int sum = 0;
            for(int j=0;j<32;++j) {
                if(i & (1<< j))
                    sum += arr[mid+j];  
            }
            right.push_back(sum);
        }
        long long int count = 0;
        map<long long int,int> m;
        // for(int num : right) m[num]++;
        sort(all(right));
        for(int i=0;i<left.size();++i){
            count += upper_bound(all(right), x - left[i]) - lower_bound(all(right), x - left[i]);
        }
        cout << count << '\n';
    return 0;
}